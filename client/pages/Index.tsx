import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Plus, BarChart3, Share2, Lock, Zap, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">e</span>
            </div>
            <span className="font-bold text-lg text-slate-900">eSkooly</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition">How It Works</a>
            <a href="#benefits" className="text-slate-600 hover:text-slate-900 transition">Benefits</a>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Floating shapes background */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-200 to-blue-300 rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Smart Inventory Management for Hostel Students
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Track personal, shared, and borrowed items all in one place — fast, clear, and smart. Never lose track of your belongings again.
            </p>
            <div className="flex gap-4 justify-center flex-wrap pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white px-8">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-200 hover:bg-blue-50">
                View Dashboard
              </Button>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Stat Cards */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                    <div className="text-2xl font-bold text-blue-900">48</div>
                    <div className="text-xs text-blue-700 mt-1">Total Items</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-900">32</div>
                    <div className="text-xs text-green-700 mt-1">Personal</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-900">12</div>
                    <div className="text-xs text-purple-700 mt-1">Shared</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-900">4</div>
                    <div className="text-xs text-orange-700 mt-1">Borrowed</div>
                  </div>
                </div>

                {/* Items Preview */}
                <div className="mt-8 space-y-3">
                  <h3 className="text-sm font-semibold text-slate-900">Recent Items</h3>
                  {[
                    { name: "Laptop", status: "Personal", badge: "In Stock", color: "bg-blue-100 text-blue-700" },
                    { name: "Books", status: "Shared", badge: "Available", color: "bg-green-100 text-green-700" },
                    { name: "Headphones", status: "Borrowed", badge: "With John", color: "bg-orange-100 text-orange-700" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition">
                      <div>
                        <div className="font-medium text-slate-900">{item.name}</div>
                        <div className="text-xs text-slate-500">{item.status}</div>
                      </div>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.color}`}>
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="relative py-24 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Powerful Features at Your Fingertips
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to manage your inventory efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: BarChart3,
                title: "Smart Dashboard",
                description: "See all items and their status instantly. Color-coded badges for quick identification.",
              },
              {
                icon: Plus,
                title: "Fast Add & Update",
                description: "Add a new item in under 10 seconds. Minimal form with smart defaults.",
              },
              {
                icon: Users,
                title: "Organized Categories",
                description: "Personal, Shared, and Borrowed tabs. Easy navigation and filtering.",
              },
              {
                icon: Share2,
                title: "Track Borrowed Items",
                description: "Know who has what and when it's due. Never lose borrowed belongings.",
              },
              {
                icon: Calendar,
                title: "Date Tracking",
                description: "Track when items were added or borrowed. Get reminders for returns.",
              },
              {
                icon: Lock,
                title: "Secure & Private",
                description: "Your inventory data is yours alone. Student-friendly security.",
              },
            ].map((feature, i) => (
              <div key={i} className="group relative p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-white/50 hover:border-blue-200 hover:bg-white/80 transition duration-300 hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simple Steps to Get Started
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get your inventory organized in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "1", title: "Add Your Item", description: "Enter item name, category, and status" },
              { number: "2", title: "Choose Category", description: "Select Personal, Shared, or Borrowed" },
              { number: "3", title: "Track Borrowers", description: "Add who has it and when it's due" },
              { number: "4", title: "Update Anytime", description: "Status changes sync instantly" },
            ].map((step, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute left-full top-6 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
                )}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="relative py-24 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Students Choose eSkooly
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Prevent Lost Belongings", description: "Know exactly where everything is. Track items by location and status to prevent loss." },
              { title: "Avoid Shared Resource Confusion", description: "Clear visibility into who has what shared items. No more disputes about availability." },
              { title: "Reduce Borrowed Item Disputes", description: "Automatic tracking of who borrowed what and when. Clear accountability for everyone." },
              { title: "Student-Friendly Experience", description: "Simple, fast, and intuitive. Designed specifically for busy hostel students with minimal friction." },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Organize Your Inventory?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of hostel students who are already managing their items smarter with eSkooly.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 font-semibold">
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              View Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
                <span className="font-bold text-white">eSkooly</span>
              </div>
              <p className="text-sm text-slate-400">Smart inventory management for hostel students.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#benefits" className="hover:text-white transition">Benefits</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">© 2024 eSkooly. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
