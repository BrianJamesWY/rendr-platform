import React from 'react';
import { Shield, Play, CheckCircle, BarChart3, Globe, Clock, Smartphone, Camera, ArrowRight, Mail, Phone } from 'lucide-react';

const LandingPage = ({ onNavigateToDemo }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Rendr</h1>
                <p className="text-sm text-gray-500">Truth Through Technology</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={onNavigateToDemo}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
              >
                Live Demo
              </button>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Solving the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">$78 Billion</span> Truth Crisis
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            The first platform to prove video authenticity through multi-source verification. 
            When multiple people record the same event, we can prove it's real.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={onNavigateToDemo}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Try Live Demo
            </button>
            <a 
              href="#how-it-works"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-gray-50 flex items-center justify-center"
            >
              How It Works
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-3xl font-bold text-red-600 mb-2">$78B</h3>
              <p className="text-gray-600">Annual cost of misinformation globally</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">73%</h3>
              <p className="text-gray-600">Can't distinguish deepfakes from real videos</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">99.8%</h3>
              <p className="text-gray-600">Rendr verification accuracy rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Crisis Breaking Democracy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-generated content is now indistinguishable from reality. Traditional detection methods are failing. 
              We're 6 months away from complete truth collapse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Real Examples of the Crisis:</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">Viral CNN "Interview" with Will Smith</h4>
                  <p className="text-red-800 text-sm">Millions believed a completely AI-generated CNN interview that never aired</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">"Pope Francis" in Designer Jacket</h4>
                  <p className="text-red-800 text-sm">AI-generated image became most shared Vatican photo of 2024</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-900 mb-2">Fake "Trump Arrest" Footage</h4>
                  <p className="text-red-800 text-sm">Viral police "footage" created in someone's basement during indictment</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">The Deepfake Election Threat</h3>
              <p className="text-lg mb-6">
                We're one viral deepfake away from electoral chaos. Imagine a candidate "caught on tape" 
                saying something career-ending 48 hours before voting begins.
              </p>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-semibold text-lg">Meta spent $13 billion trying to detect AI content...</p>
                <p className="text-orange-100">And failed completely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Rendr Solution: Proof, Not Detection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instead of trying to detect AI-generated content (which doesn't work), 
              we PROVE what's real through multi-source verification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Breakthrough Insight</h3>
              <p className="text-gray-700 mb-6">
                When something important happens, dozens of people record it with their phones. 
                Rendr automatically finds and compares all those recordings.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-green-800 font-semibold">
                  You literally cannot coordinate 20 people to fake the same event with perfect timing, 
                  lighting, audio, and camera movement. The physics make it impossible.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">How Multi-Source Verification Works:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Audio Fingerprinting</h4>
                    <p className="text-gray-600 text-sm">Spectral analysis and peak matching like Shazam</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Camera className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Visual Feature Matching</h4>
                    <p className="text-gray-600 text-sm">SIFT keypoint detection and frame correlation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">GPS Verification</h4>
                    <p className="text-gray-600 text-sm">Spatial proximity and location correlation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Timestamp Analysis</h4>
                    <p className="text-gray-600 text-sm">Temporal correlation and synchronization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Smartphone className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Device Fingerprinting</h4>
                    <p className="text-gray-600 text-sm">Metadata authenticity verification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Tiers */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Verification Confidence Levels</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-yellow-800 mb-2">Rendrd Gold</h4>
                <p className="text-yellow-700 mb-2">99%+ Confidence</p>
                <p className="text-sm text-yellow-600">5+ verified sources with perfect correlation</p>
              </div>
              <div className="text-center p-6 bg-gray-50 border-2 border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Rendrd Silver</h4>
                <p className="text-gray-700 mb-2">95%+ Confidence</p>
                <p className="text-sm text-gray-600">3-4 verified sources with strong correlation</p>
              </div>
              <div className="text-center p-6 bg-orange-50 border-2 border-orange-200 rounded-xl">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-orange-800 mb-2">Rendrd Bronze</h4>
                <p className="text-orange-700 mb-2">90%+ Confidence</p>
                <p className="text-sm text-orange-600">2 verified sources with good correlation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Experience the Technology</h2>
          <p className="text-xl text-blue-100 mb-8">
            See multi-source verification in action. Upload videos and watch our algorithms 
            analyze audio, visual, temporal, and spatial correlation in real-time.
          </p>
          <button 
            onClick={onNavigateToDemo}
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center mx-auto"
          >
            <Play className="w-5 h-5 mr-2" />
            Try the Live Demo
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to partner with us or learn more about Rendr? Let's discuss how we can work together 
            to solve the truth crisis.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:brian@rendrtruth.com" className="text-blue-600 hover:text-blue-700">
                brian@rendrtruth.com
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:760-422-9411" className="text-blue-600 hover:text-blue-700">
                760-422-9411
              </a>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Brian James</h3>
            <p className="text-gray-700 mb-4">Founder & CEO, Rendr</p>
            <p className="text-gray-600">
              "We're not just verifying videos. We're bringing truth back to content, 
              and monetizing reality itself."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold">Rendr</h3>
                <p className="text-sm text-gray-400">Truth Through Technology</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Rendr. Solving the $78B Truth Crisis.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Multi-Source Video Verification Platform
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;