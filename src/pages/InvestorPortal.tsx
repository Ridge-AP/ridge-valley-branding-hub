import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, User, Mail } from 'lucide-react';

const InvestorPortalPage = () => {
  return (
    <Layout>
      <PageHeader 
        title="Investor Portal" 
        subtitle="Access exclusive investment opportunities and financial data."
      />
      
      <section className="section-padding">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="w-20 h-20 rounded-full bg-ridge-gold/10 flex items-center justify-center mb-8 mx-auto">
            <Lock className="text-ridge-gold w-10 h-10" />
          </div>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Investor Login</CardTitle>
                  <CardDescription>
                    Access your investor dashboard and financial reports
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="login-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <Button className="btn-primary w-full">
                    Access Portal
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    Forgot your password? Contact investor relations
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Request Investor Access</CardTitle>
                  <CardDescription>
                    Submit your information for investor portal access approval
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Your full name"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-organization">Organization</Label>
                    <Input
                      id="signup-organization"
                      type="text"
                      placeholder="Your organization/fund name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-investment">Investment Interest</Label>
                    <Input
                      id="signup-investment"
                      type="text"
                      placeholder="Investment range (e.g., $1M - $5M)"
                    />
                  </div>
                  
                  <Button className="btn-primary w-full">
                    Request Access
                  </Button>
                  
                  <div className="bg-ridge-gold/10 border border-ridge-gold/20 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> Access requires approval from our investor relations team. 
                      You will be contacted within 48 hours regarding your application status.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorPortalPage;