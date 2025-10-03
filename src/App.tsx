import { Menu, X, Zap, TrendingUp, Target, Users, BarChart3, Clock, Shield, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import logoSrc from './assets/logo3-small-trsp.png';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="DM Flow Logo"
                className="h-10"
              />
              {/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DMFlow
              </span> */}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#service" className="text-gray-700 hover:text-blue-600 transition-colors">Service</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">Process</a>
              <a href="#automations" className="text-gray-700 hover:text-blue-600 transition-colors">Automations</a>
              <a href="#why-us" className="text-gray-700 hover:text-blue-600 transition-colors">Why Us</a>
              <a href="https://cal.com/patrick-p/15min" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-shadow">
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#service" className="block text-gray-700 hover:text-blue-600">Service</a>
              <a href="#process" className="block text-gray-700 hover:text-blue-600">Process</a>
              <a href="#automations" className="block text-gray-700 hover:text-blue-600">Automations</a>
              <a href="#why-us" className="block text-gray-700 hover:text-blue-600">Why Us</a>
              <a href="#contact" className="block text-blue-600 font-medium">Get Started</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Unlock New Revenue with{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Instagram DM Automation
            </span>{' '}
            for DTC Brands
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Drive sales, capture contact information, and support customers 24/7 with a fully automated Instagram DM system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/patrick-p/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow"
            >
              Schedule a Call
            </a>
            <a
              href="#service"
              className="bg-white border-2 border-gray-200 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              7x
            </div>
            <div className="text-gray-400">ROAS on Chatbot Ads</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              90%+
            </div>
            <div className="text-gray-400">Email Capture Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
              10-20%
            </div>
            <div className="text-gray-400">AOV Increase</div>
          </div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              10 Days
            </div>
            <div className="text-gray-400">To Full Launch</div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Service: <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Done-For-You</span> Instagram DM Automation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              At our agency, we specialize in building powerful, Meta-compliant Instagram DM automation systems specifically designed for Direct-to-Consumer (DTC) e-commerce brands. We handle the entire process, from strategy to implementation, turning your Instagram DMs into a high-converting sales channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl hover:shadow-xl transition-shadow">
              <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Fully Automated</h3>
              <p className="text-gray-600">
                Complete automation from first message to purchase, handling thousands of conversations simultaneously.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Meta-Compliant</h3>
              <p className="text-gray-600">
                Built to 100% compliance with Meta's policies, protecting your account and ensuring long-term sustainability.
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-8 rounded-3xl hover:shadow-xl transition-shadow">
              <TrendingUp className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Revenue Focused</h3>
              <p className="text-gray-600">
                Every flow is designed with one goal in mind: increasing your sales and customer lifetime value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Process: Building Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Automated Sales Machine
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement a proven, step-by-step framework to create a customized DM automation system that drives results for your brand.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Amplify Interest & Lead Capture",
                description: "We design initial chatbot flows that actively engage your audience, leading with value to capture emails and other crucial customer data directly within Instagram DMs.",
                gradient: "from-blue-600 to-purple-600"
              },
              {
                number: "02",
                title: "Strategic Conversational Design",
                description: "Leveraging tools like Manychat we build chat funnels that are designed to educate, answer frequently asked questions (FAQs), and guide users through a personalized buying journey.",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                number: "03",
                title: "Content Alignment & Traffic Generation",
                description: "We work with you to align your Instagram content strategy (posts, Reels, Stories, paid ads) to consistently drive traffic into your DM ecosystem. By incentivizing comments and replies with keywords, we trigger automated conversations.",
                gradient: "from-pink-600 to-blue-600"
              },
              {
                number: "04",
                title: "Conversion Optimization & Chatbot Retargeting",
                description: "Our system tracks user behavior within the DMs, identifying drop-off points and understanding purchase triggers. If a purchase isn't made, the chatbot initiates value-driven follow-up conversations over days, weeks, or even months.",
                gradient: "from-blue-600 to-purple-600"
              },
              {
                number: "05",
                title: "Enhanced Customer Experience & LTV Ascension",
                description: "Beyond the initial sale, we implement post-purchase DM automations to nurture customer relationships. This includes checking on product satisfaction, collecting reviews, and strategically offering upsells or subscriptions.",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                number: "06",
                title: "Continuous Optimization",
                description: "We analyze performance data to continuously refine and optimize your DM automation flows, ensuring maximum conversion rates and sustained growth.",
                gradient: "from-pink-600 to-blue-600"
              }
            ].map((step) => (
              <div key={step.number} className="bg-white p-8 rounded-3xl hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`text-6xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent flex-shrink-0`}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automations Section */}
      <section id="automations" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Automations Can We{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Build For You?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Instagram DM automation solutions are tailored to your brand's unique needs, covering every stage of the customer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10" />,
                title: "Abandoned Cart Recovery",
                description: "Automatically remind users about abandoned carts in their DMs, presenting personalized offers and limited-time discounts to recover lost sales.",
                stat: "5-10% purchase rates",
                gradient: "from-blue-600 to-purple-600"
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Giveaways & Contests",
                description: "Streamline participation in giveaways by automatically collecting entries, emails, and offering instant purchasing incentives, while building your DM list.",
                stat: "5-15% purchase rates",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                icon: <MessageSquare className="w-10 h-10" />,
                title: "Flash Sale & Exclusive Offer Broadcasts",
                description: "Leverage Meta-compliant DM lists to send free push notifications about flash sales, new product launches, and exclusive VIP offers directly to your audience.",
                stat: "Instant notifications",
                gradient: "from-pink-600 to-blue-600"
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Post-Purchase Nurturing & Upsells",
                description: "Engage customers after a purchase to gather feedback, offer support, and strategically present upsell opportunities or subscription options.",
                stat: "Increase LTV",
                gradient: "from-blue-600 to-purple-600"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Capture Contact Information",
                description: "Capture emails and phone numbers by offering free resources (eBooks, quizzes, guides) in exchange for engagement. Move from a 'rented' social media audience to an 'owned' audience.",
                stat: "90%+ email capture",
                gradient: "from-purple-600 to-pink-600"
              },
              {
                icon: <BarChart3 className="w-10 h-10" />,
                title: "Personalized Product Recommendations",
                description: "Develop interactive quizzes and product finders within DMs that learn about customer preferences and instantly offer tailored recommendations.",
                stat: "10-20% AOV increase",
                gradient: "from-pink-600 to-blue-600"
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "24/7 Customer Support & FAQ Automation",
                description: "Provide instant answers to common questions about products, shipping, and more, reducing response times by 99% and enhancing customer satisfaction around the clock.",
                stat: "99% faster response",
                gradient: "from-blue-600 to-purple-600"
              }
            ].map((automation, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-transparent hover:shadow-xl transition-all group">
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${automation.gradient} text-white mb-4`}>
                  {automation.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{automation.title}</h3>
                <p className="text-gray-600 mb-4">{automation.description}</p>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${automation.gradient} bg-clip-text text-transparent font-semibold border-2 border-gray-100`}>
                  {automation.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Us?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Domain Expertise
              </h3>
              <p className="text-gray-300 text-lg">
                We specialize in building Instagram DM automations for e-commerce brands. This isn't a side service - it's what we do best.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Meta-Compliant Solutions
              </h3>
              <p className="text-gray-300 text-lg">
                Our systems are built to be 100% compliant with all of Meta's policies, protecting your account and future-proofing your strategy.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                Technology Stack
              </h3>
              <p className="text-gray-300 text-lg">
                Beyond standard tools like Manychat, we utilize other tools to track revenue & customer activity, giving you insights into why and when people buy.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Significant ROI
              </h3>
              <p className="text-gray-300 text-lg">
                Experience dramatic increases in sales, email capture rates, and organic reach, often doubling sales without additional ad spend and achieving ROAS as high as 7x on chatbot based ads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Turn Your Instagram DMs into a Revenue-Generating Machine?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Stop leaving money on the table. Discover how tailored Instagram DM automations can revolutionize your DTC brand's sales, engagement, and customer experience.
          </p>
          <a
            href="https://cal.com/patrick-p/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-shadow"
          >
            Schedule a Free Strategy Call Today
          </a>
          <p className="mt-6 text-sm opacity-75">
            Launch your custom end-to-end chat system in just 10 business days
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Logo & Headline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://placehold.co/40x40/2563eb/white?text=Logo"
                  alt="DMFlow Logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  DMFlow
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Unlock New Revenue with Instagram DM Automation for DTC Brands
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#service" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#automations" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Automations
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Why Us
                  </a>
                </li>
                <li>
                  <a href="https://cal.com/patrick-p/15min" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  Al. Jerozolimskie 181/5<br />
                  02-222 Warsaw, Poland
                </li>
                <li>
                  <a href="tel:+16049231571" className="hover:text-blue-400 transition-colors">
                    +1 (604) 923-1571
                  </a>
                </li>
                <li>
                  <a href="mailto:info@dmsurge.com" className="hover:text-blue-400 transition-colors">
                    info@dmsurge.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2025 DMFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
