import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CalendarDays, User, Share2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  published_date: string;
  featured_image?: string;
  is_featured: boolean;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPost(id);
    }
  }, [id]);

  const fetchPost = async (postId: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .maybeSingle();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Erro ao buscar o artigo:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('URL copiada');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Artigo não encontrado - NORDATA Blog</title>
          <meta name="description" content="El artículo que buscas no se encuentra disponible." />
        </Helmet>
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
            <p className="text-muted-foreground mb-8">Desculpe, o artigo que você procura não está disponível.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/blog">
                Voltar ao blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} - NORDATA Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.category}, inteligência artificial, análise de dados, NORDATA`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.published_date} />
        <meta property="article:section" content={post.category} />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
        <link rel="canonical" href={`/blog/${post.id}`} />
      </Helmet>

      {/* Header */}
      <header className="bg-primary/95 backdrop-blur-md border-b border-secondary/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-secondary/20">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao blog
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/8b51a508-e5c4-42e6-a6fb-b1824152b97a.png" 
                alt="NORDATA" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-primary-foreground">NORDATA</span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleShare} className="text-primary-foreground hover:bg-secondary/20">
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article>
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>{formatDate(post.published_date)}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <User className="h-5 w-5" />
              <span className="font-medium">Por {post.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="mb-12">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-xl shadow-primary"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="py-8">
                <div 
                  className="text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Categoria:</span>
                <Badge variant="outline">{post.category}</Badge>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/blog">
                    Ver mais artigos
                  </Link>
                </Button>
                <Button variant="hero" size="sm" asChild>
                  <Link to="/#contato">
                    Falar com a gente
                  </Link>
                </Button>
              </div>
            </div>
          </footer>
        </article>

        {/* CTA Section */}
        <section className="mt-16">
          <Card className="border-border/50 bg-gradient-accent/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-primary">
                Gostou deste artigo?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Descubra mais conteúdos sobre inteligência artificial e análise de dados,
                ou fale com nossos especialistas para saber como podemos ajudar sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <Link to="/blog">
                    Explorar mais artigos
                  </Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#contato">
                    Falar com um especialista
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;