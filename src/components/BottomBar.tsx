import { motion } from 'framer-motion';

const BottomBar = () => {
  const socials = [
    { name: 'GitHub', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
  ];

  return (
    <motion.div
      className="md:hidden fixed bottom-0 left-0 right-0 bg-[#faf8f5] border-t border-[#e9e5dd] z-30"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div className="container flex justify-around py-2">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="text-[#4a4a4a] text-xs hover:text-[#e66000] transition-colors duration-200 py-2 px-4"
          >
            {social.name}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default BottomBar;