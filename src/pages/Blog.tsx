import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowLeft, User } from "lucide-react";
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

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_date', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ["all", ...Array.from(new Set(posts.map(post => post.category)))];

  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const featuredPost = posts.find(post => post.is_featured);
  const regularPosts = posts.filter(post => !post.is_featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Blog - NORDATA.AI | Noticias y Recursos sobre IA y Análisis de Datos</title>
          <meta name="description" content="Mantente actualizado con las últimas tendencias en inteligencia artificial, análisis de datos y transformación digital con el blog de NORDATA." />
        </Helmet>
        <div className="container mx-auto px-4 py-20">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog - NORDATA.AI | Noticias y Recursos sobre IA y Análisis de Datos</title>
        <meta name="description" content="Mantente actualizado con las últimas tendencias en inteligencia artificial, análisis de datos y transformación digital con el blog de NORDATA." />
        <meta name="keywords" content="blog, inteligencia artificial, análisis de datos, transformación digital, tecnología, innovación" />
        <meta property="og:title" content="Blog - NORDATA.AI | Noticias y Recursos sobre IA y Análisis de Datos" />
        <meta property="og:description" content="Mantente actualizado con las últimas tendencias en inteligencia artificial, análisis de datos y transformación digital." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/blog" />
      </Helmet>

      {/* Header with back button */}
      <header className="bg-primary/95 backdrop-blur-md border-b border-secondary/20 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-secondary/20">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao inicio
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/logo2.png" 
                alt="NORDATA" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-primary-foreground">NORDATA</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nordata.Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubra as últimas tendências em inteligência artificial, análise de dados
            e transformação digital. Mantenha-se atualizado com insights especializados e recursos educativos.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === "all" ? "Todos" : category}
              </Button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "all" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Artigo em Destaque</h2>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-primary transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="order-2 md:order-1">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(featuredPost.published_date)}
                      </span>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl text-primary">
                      {featuredPost.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                      </div>
                      <Button variant="hero" size="lg" asChild>
                        <Link to={`/blog/${featuredPost.id}`}>
                          Ler artigo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
                {featuredPost.featured_image && (
                  <div className="order-1 md:order-2">
                    <img
                      src={featuredPost.featured_image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </Card>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            {selectedCategory === "all" ? "Últimos artigos" : `Artigos sobre ${selectedCategory}`}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                Não há artigos disponíveis nesta categoria.
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => setSelectedCategory("all")}
                className="mt-4"
              >
                Ver todos os artigos
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === "all" ? regularPosts : filteredPosts).map((post) => (
                <Card key={post.id} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-accent transition-all duration-300 group">
                  {post.featured_image && (
                    <div className="overflow-hidden rounded-t-lg">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <CalendarDays className="h-3 w-3" />
                        <span>{formatDate(post.published_date)}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/blog/${post.id}`}>
                          Ler mais
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <Card className="border-border/50 bg-gradient-primary/10 backdrop-blur-sm">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4 text-primary">
                Quer se manter atualizado?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Assine nossas atualizações e receba os últimos artigos sobre
                inteligência artificial e análise de dados diretamente na sua caixa de entrada.'
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/#contato">
                  Entrar em contato
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Blog;