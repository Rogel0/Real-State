import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Home as HomeIcon,
  Users,
  TrendingUp,
  Award,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroIsInView = useInView(heroRef, { once: true, margin: "-100px" });
  const statsIsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const servicesIsInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const galleryIsInView = useInView(galleryRef, {
    once: true,
    margin: "-100px",
  });

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const bgY = useTransform(scrollY, [0, 1000], [0, -200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const slideInVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <motion.nav
        className="bg-white shadow-sm border-b sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col">
                <h1 className="text-xl lg:text-2xl font-bold text-blue-900">
                  MARCI METZGER
                </h1>
                <span className="text-xs lg:text-sm text-gray-600">
                  Pahrump Realtor
                </span>
              </div>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-8">
              <motion.a
                href="#services"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                onClick={handleLinkClick}
              >
                Services
              </motion.a>
              <motion.a
                href="#listings"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                onClick={handleLinkClick}
              >
                Listings
              </motion.a>
              <motion.a
                href="#about"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                onClick={handleLinkClick}
              >
                About
              </motion.a>
              <motion.a
                href="#contact"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                onClick={handleLinkClick}
              >
                Contact
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg">
                  <Phone className="mr-2 h-4 w-4" />
                  <span className="hidden xl:inline">(206) 919-6886</span>
                  <span className="xl:hidden">Call</span>
                </Button>
              </motion.div>
            </div>

            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t z-40"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-4 py-6 space-y-4">
                  <motion.a
                    href="#services"
                    className="block text-gray-700 hover:text-blue-900 font-medium py-3 px-2 rounded-lg hover:bg-blue-50 transition-colors"
                    onClick={handleLinkClick}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    Services
                  </motion.a>
                  <motion.a
                    href="#listings"
                    className="block text-gray-700 hover:text-blue-900 font-medium py-3 px-2 rounded-lg hover:bg-blue-50 transition-colors"
                    onClick={handleLinkClick}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ x: 5 }}
                  >
                    Listings
                  </motion.a>
                  <motion.a
                    href="#listings"
                    className="block text-gray-700 hover:text-blue-900 font-medium py-3 px-2 rounded-lg hover:bg-blue-50 transition-colors"
                    onClick={handleLinkClick}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    About
                  </motion.a>
                  <motion.a
                    href="#contact"
                    className="block text-gray-700 hover:text-blue-900 font-medium py-3 px-2 rounded-lg hover:bg-blue-50 transition-colors"
                    onClick={handleLinkClick}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    Contact
                  </motion.a>
                  <motion.div
                    className="pt-4 border-t border-gray-200"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg justify-center"
                      onClick={handleLinkClick}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call (206) 919-6886
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden h-[70vh] flex items-center">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-800/80"></div>
        </motion.div>

        <motion.div
          ref={heroRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate={heroIsInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
              variants={itemVariants}
            >
              REALTOR FOR NEARLY 3 DECADES!
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100 drop-shadow-md"
              variants={itemVariants}
            >
              Expert guidance in Pahrump real estate with unmatched experience
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-8 px-4 sm:px-0"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-900 hover:bg-gray-50 shadow-xl hover:shadow-2xl border-0 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300"
                >
                  <Search className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                  Search Properties
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-900 shadow-xl hover:shadow-2xl backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 bg-transparent"
                >
                  <Phone className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                  Get Free Consultation
                </Button>
              </motion.div>

              <motion.div
                className="mt-2 sm:mt-4 lg:mt-0 lg:ml-4 w-full sm:w-auto flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <motion.a
                  href="tel:2069196886"
                  className="inline-flex items-center text-white/90 hover:text-white text-xs sm:text-sm font-medium transition-colors duration-300"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full mr-2 sm:mr-3 border border-white/20">
                    <Phone className="h-3 sm:h-4 w-3 sm:w-4" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <p className="text-xs opacity-80">Call Now</p>
                    <p className="font-semibold">(206) 919-6886</p>
                  </div>
                  <div className="text-left sm:hidden">
                    <p className="font-semibold text-xs">(206) 919-6886</p>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={statsRef}
            className="grid md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            animate={statsIsInView ? "visible" : "hidden"}
          >
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm"
              variants={scaleVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <TrendingUp className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-blue-900 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
              >
                $28.5M
              </motion.h3>
              <p className="text-gray-600">In sales volume (2021)</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm"
              variants={scaleVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Users className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-blue-900 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
              >
                90+
              </motion.h3>
              <p className="text-gray-600">Happy clients served</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-sm"
              variants={scaleVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Award className="h-12 w-12 text-blue-900 mx-auto mb-4" />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-blue-900 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 300 }}
              >
                Top 5
              </motion.h3>
              <p className="text-gray-600">Residential sales ranking</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{ y: useTransform(scrollY, [600, 1400], [0, -100]) }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl font-bold text-gray-900 mb-6"
              style={{ y: useTransform(scrollY, [600, 1200], [0, -50]) }}
            >
              GET IT SOLD
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-900 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
          </motion.div>

          <motion.div
            ref={servicesRef}
            className="space-y-20"
            variants={containerVariants}
            initial="hidden"
            animate={servicesIsInView ? "visible" : "hidden"}
          >
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={slideInVariants}
            >
              <motion.div
                className="order-2 lg:order-1"
                style={{ y: useTransform(scrollY, [700, 1300], [0, -30]) }}
              >
                <motion.h3
                  className="text-3xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Top Residential Sales Last 5 Years
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  We helped nearly 90 clients in 2021, and closed{" "}
                  <span className="font-semibold text-blue-900">
                    28.5 million in sales!
                  </span>
                </motion.p>
                <motion.p
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Our team works hard everyday to grow and learn, so that we may
                  continue to excel in our market. Our clients deserve our best,
                  & we want to make sure our best is better every year.
                </motion.p>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                      View Our Success Stories
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2 relative"
                style={{ y: useTransform(scrollY, [700, 1300], [0, 20]) }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.4 },
                  }}
                  initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Luxury home exterior with beautiful landscaping"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <p className="text-sm font-semibold text-gray-900">
                      $2.8M Average Sale Price
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={slideInVariants}
            >
              <motion.div
                className="relative"
                style={{ y: useTransform(scrollY, [900, 1500], [0, 20]) }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    rotateY: -5,
                    transition: { duration: 0.4 },
                  }}
                  initial={{ opacity: 0, scale: 0.8, rotateX: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Modern real estate office with professional agents"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  <motion.div
                    className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm rounded-lg p-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                  >
                    <p className="text-xs font-semibold text-white">SOLD</p>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                style={{ y: useTransform(scrollY, [900, 1500], [0, -30]) }}
              >
                <motion.h3
                  className="text-3xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Don't Just List it...
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <span className="font-semibold text-blue-900">
                    Get it SOLD!
                  </span>{" "}
                  We exhaust every avenue to ensure our listings are at the
                  fingertips of every possible buyer, getting you top dollar for
                  your home.
                </motion.p>
                <motion.div
                  className="grid grid-cols-2 gap-4 mb-6"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-blue-900">90+</p>
                    <p className="text-sm text-gray-600">Properties Sold</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">45 Days</p>
                    <p className="text-sm text-gray-600">Avg. Time on Market</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                      See Our Marketing Strategy
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              variants={slideInVariants}
            >
              <motion.div
                className="order-2 lg:order-1"
                style={{ y: useTransform(scrollY, [1100, 1700], [0, -30]) }}
              >
                <motion.h3
                  className="text-3xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Guide to Buyers
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Nobody knows the market like we do. Enjoy having a pro at your
                  service. Market analysis, upgrades lists, contractors on speed
                  dial, & more!
                </motion.p>
                <motion.div
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {[
                    "Market Analysis & Pricing Strategy",
                    "Professional Network of Contractors",
                    "Negotiation Expertise",
                    "Post-Purchase Support",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    >
                      <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                      <p className="text-gray-700">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                      Start Your Home Search
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="order-1 lg:order-2 relative"
                style={{ y: useTransform(scrollY, [1100, 1700], [0, 20]) }}
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.4 },
                  }}
                  initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Happy family with real estate agent holding house keys"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                  <motion.div
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <p className="text-sm font-semibold text-gray-900">
                      Expert Guidance
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{ y: useTransform(scrollY, [2000, 2600], [0, -80]) }}
        >
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl font-bold text-gray-900 mb-6"
              style={{ y: useTransform(scrollY, [2000, 2400], [0, -30]) }}
            >
              Our Services
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-blue-900 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.div>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Comprehensive real estate services tailored to your needs
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              variants={scaleVariants}
              style={{ y: useTransform(scrollY, [2100, 2700], [0, -20]) }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4 },
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Real estate consultation and service"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <HomeIcon className="h-6 w-6 text-blue-900" />
                </motion.div>
              </div>
              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  Real Estate Done Right
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nervous about your property adventure? Don't be. Whether
                  you're getting ready to buy or sell your residence, looking at
                  investment properties, or just curious about the markets, our
                  team ensures you get the best experience possible!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="group-hover:bg-blue-900 group-hover:text-white transition-all"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              variants={scaleVariants}
              style={{ y: useTransform(scrollY, [2150, 2750], [0, -30]) }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4 },
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Commercial and residential properties"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <TrendingUp className="h-6 w-6 text-blue-900" />
                </motion.div>
              </div>
              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  Commercial & Residential
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Large or small, condo or mansion, we can find it and get at
                  the price that's right. Fixer-uppers? Luxury? We can help with
                  all of it! We live, work, and play in this community. Happy to
                  help you find where to put your hard-earned dollars.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="group-hover:bg-blue-900 group-hover:text-white transition-all"
                  >
                    View Properties
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              variants={scaleVariants}
              style={{ y: useTransform(scrollY, [2200, 2800], [0, -20]) }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.4 },
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Expert real estate consultation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Users className="h-6 w-6 text-blue-900" />
                </motion.div>
              </div>
              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  Rely on Expertise
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If you have questions about affordability, credit, and loan
                  options, trust us to connect you with the right people to get
                  the answers you need in a timely fashion. We make sure you
                  feel confident and educated every step of the way.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="group-hover:bg-blue-900 group-hover:text-white transition-all"
                  >
                    Get Consultation
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="listings" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Dream Home
            </h2>
            <p className="text-xl text-gray-600">
              Search through our extensive property listings
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <motion.select
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option>Pahrump, NV</option>
                  <option>Las Vegas, NV</option>
                  <option>Henderson, NV</option>
                </motion.select>
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <motion.select
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option>All Types</option>
                  <option>Single Family</option>
                  <option>Condo</option>
                  <option>Commercial</option>
                </motion.select>
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <motion.select
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                </motion.select>
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <motion.select
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  whileFocus={{ scale: 1.02 }}
                >
                  <option>Any Price</option>
                  <option>$0 - $200k</option>
                  <option>$200k - $400k</option>
                  <option>$400k+</option>
                </motion.select>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="w-full md:w-auto bg-blue-900 hover:bg-blue-800"
                size="lg"
              >
                <Search className="mr-2 h-5 w-5" />
                Search Properties
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y: useTransform(scrollY, [1400, 2000], [0, -150]) }}
        >
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-5xl font-bold text-gray-900 mb-6"
              style={{ y: useTransform(scrollY, [1400, 1800], [0, -40]) }}
            >
              Photo Gallery
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Take a look at some of our featured properties and successful
              sales
            </motion.p>
          </motion.div>

          <motion.div
            ref={galleryRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={galleryIsInView ? "visible" : "hidden"}
          >
            {[
              {
                url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                title: "Modern Family Home",
                price: "$850,000",
                status: "SOLD",
              },
              {
                url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                title: "Luxury Villa",
                price: "$1,200,000",
                status: "SOLD",
              },
              {
                url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                title: "Contemporary Condo",
                price: "$620,000",
                status: "SOLD",
              },
              {
                url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                title: "Ranch Style Home",
                price: "$750,000",
                status: "PENDING",
              },
              {
                url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                title: "Cozy Townhouse",
                price: "$480,000",
                status: "SOLD",
              },
              {
                url: "https://images.unsplash.com/photo-1600563438938-a42676c2a7a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                title: "Executive Estate",
                price: "$2,100,000",
                status: "FOR SALE",
              },
            ].map((property, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-xl"
                variants={scaleVariants}
                style={{
                  y: useTransform(
                    scrollY,
                    [1500 + index * 50, 2100 + index * 50],
                    [0, index % 2 === 0 ? -30 : 30]
                  ),
                }}
                whileHover={{
                  scale: 1.08,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  rotateX: 2,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 100, rotateX: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: {
                    delay: index * 0.15,
                    duration: 0.8,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="h-80 relative">
                  <img
                    src={property.url}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  <motion.div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                      property.status === "SOLD"
                        ? "bg-green-500/90 text-white"
                        : property.status === "PENDING"
                        ? "bg-yellow-500/90 text-white"
                        : "bg-blue-500/90 text-white"
                    }`}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.6,
                      type: "spring",
                    }}
                  >
                    {property.status}
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    <h3 className="text-lg font-bold mb-1 group-hover:text-blue-200 transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-2xl font-bold text-green-400">
                      {property.price}
                    </p>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-full p-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Search className="h-6 w-6 text-blue-900" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3"
              >
                View All Properties
                <TrendingUp className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={slideInVariants}>
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Call or Visit
              </motion.h2>
              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.div
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <MapPin className="h-6 w-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      THE RIDGE REALTY GROUP
                    </h3>
                    <p className="text-gray-600">
                      3190 HW-160, Suite F<br />
                      Pahrump, Nevada 89048
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <Phone className="h-6 w-6 text-blue-900" />
                  <a
                    href="tel:2069196886"
                    className="text-blue-900 font-semibold text-lg hover:underline"
                  >
                    (206) 919-6886
                  </a>
                </motion.div>
                <motion.div
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <Clock className="h-6 w-6 text-blue-900 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Office Hours
                    </h3>
                    <p className="text-gray-600">
                      Open daily 8:00 AM - 7:00 PM
                    </p>
                    <p className="text-sm text-gray-500">
                      Appointments outside office hours available upon request
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div className="mt-8" variants={itemVariants}>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <motion.div
                  className="flex space-x-4"
                  variants={containerVariants}
                >
                  {[
                    {
                      href: "https://www.facebook.com/MarciHomes/",
                      icon: Facebook,
                    },
                    {
                      href: "https://www.instagram.com/marciandlauren_nvrealtors/",
                      icon: Instagram,
                    },
                    {
                      href: "https://www.linkedin.com/in/marci-metzger-30642496/",
                      icon: Linkedin,
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="bg-blue-900 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-gray-50 p-8 rounded-lg"
              variants={scaleVariants}
              whileHover={{
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Send Message
              </motion.h3>
              <motion.form
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email*
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
                  />
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800"
                  >
                    Send
                  </Button>
                </motion.div>
                <motion.p
                  className="text-xs text-gray-500 mt-2"
                  variants={itemVariants}
                >
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    className="underline"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    className="underline"
                  >
                    Terms of Service
                  </a>{" "}
                  apply.
                </motion.p>
              </motion.form>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <motion.a
                  href="https://wa.me/14259412560"
                  className="inline-flex items-center text-blue-900 hover:underline font-semibold"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Message us on WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.footer
        className="bg-gray-900 text-white py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              MARCI METZGER
            </motion.h3>
            <motion.p className="text-gray-400 mb-6" variants={itemVariants}>
              THE RIDGE REALTY GROUP - Pahrump Realtor
            </motion.p>
            <motion.div
              className="flex justify-center space-x-6 mb-8"
              variants={containerVariants}
            >
              {[
                {
                  href: "https://www.facebook.com/MarciHomes/",
                  icon: Facebook,
                },
                {
                  href: "https://www.instagram.com/marciandlauren_nvrealtors/",
                  icon: Instagram,
                },
                {
                  href: "https://www.linkedin.com/in/marci-metzger-30642496/",
                  icon: Linkedin,
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.3,
                    y: -5,
                    color: "#ffffff",
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              className="border-t border-gray-800 pt-8"
              variants={itemVariants}
            >
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
