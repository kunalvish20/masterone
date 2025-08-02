import Header from "@/components/header/Header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 mt-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About <span className="text-blue-600">MasterOne</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The all-in-one productivity platform designed to help founders and professionals achieve more with less effort.
          </p>
        </div>
        
        {/* Mission Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Mission illustration"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <div className="space-y-4">
                <p className="text-lg">
                  At MasterOne, we're redefining productivity for modern professionals. Our platform combines powerful tools with intuitive design to help you focus on what truly matters.
                </p>
                <p className="text-lg">
                  Whether you're building a startup, managing projects, or organizing your workflow, MasterOne provides the integrated solutions you need to work smarter, not harder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose MasterOne?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4"></path>
                    <path d="m16 6-4-4-4 4"></path>
                    <path d="M18 20a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2"></path>
                    <path d="m6 16-4-4 4-4"></path>
                    <path d="m18 8 4 4-4 4"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Integrated Workflow</h3>
                <p className="text-muted-foreground">
                  All your productivity tools in one place - tasks, notes, meetings, and resources seamlessly connected.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Founder-Focused</h3>
                <p className="text-muted-foreground">
                  Built specifically for startup founders with curated resources and templates to accelerate your growth.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Smart Automation</h3>
                <p className="text-muted-foreground">
                  AI-powered features that learn your workflow and suggest optimizations to save you time.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">The MasterOne Team</h2>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto">
            We're a passionate group of entrepreneurs, designers, and engineers who've experienced the productivity challenges firsthand and built the solution we wish we had.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Alex Chen", role: "CEO & Founder", bio: "Serial entrepreneur with 3 successful exits" },
              { name: "Jamie Rivera", role: "Product Lead", bio: "Former PM at leading productivity apps" },
              { name: "Taylor Smith", role: "Engineering", bio: "Full-stack developer with AI expertise" }
            ].map((member, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image
                    src={`/placeholder.svg`}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mb-4"
                  />
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground mb-3">{member.role}</p>
                  <p className="text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                MasterOne was born out of frustration with juggling multiple productivity tools that didn't talk to each other. As founders ourselves, we wasted countless hours switching between apps and recreating information.
              </p>
              <p className="text-lg">
                We set out to build a unified platform that combines all the essential tools founders need, with smart automation to eliminate busywork. The result is MasterOne - the productivity command center we always wanted.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-inner border">
                <Image
                  src="/placeholder.svg"
                  alt="Founders working"
                  width={400}
                  height={300}
                  className="rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Built With Modern Technology</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Next.js', 'TypeScript', 'Tailwind CSS', 'AI/ML', 'Cloud Native'].map((tech) => (
              <span key={tech} className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-lg text-center max-w-2xl mx-auto">
            MasterOne leverages cutting-edge technology to deliver a seamless experience across all your devices, with enterprise-grade security and reliability.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Master Your Productivity?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of founders and professionals who are achieving more with MasterOne.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started Free
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}