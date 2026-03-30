/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PawPrint, 
  ArrowRight, 
  ChevronDown, 
  ShieldCheck, 
  Star, 
  CheckCircle2,
  Clock,
  AlertTriangle,
  Apple,
  Utensils
} from 'lucide-react';

const testimonials = [
  {
    name: "Rafaela Almeida",
    location: "Minas Gerais",
    text: "Sempre sofri para fazer meu Shihtzu comer a ração porque ele ficava enjoado, depois que comprei os ebooks ele nunca mais deu trabalho com isso",
    image: "https://picsum.photos/seed/dog1/100/100"
  },
  {
    name: "Amanda Garcia",
    location: "Salvador",
    text: "Achei que fosse gastar muito para fazer uma comida saudável para o meu filhinho de quatro patas, mas as receitas do ebook são bem fáceis de fazer e baratas mesmo. Aprovado!",
    image: "https://picsum.photos/seed/dog2/100/100"
  },
  {
    name: "Maria Helena",
    location: "Rio de Janeiro",
    text: "Estou gostando muito, ótimas receitas. Agora consigo ter uma variedade de receitas para fazer",
    image: "https://picsum.photos/seed/dog3/100/100"
  }
];

const faqs = [
  {
    question: "Serve para todas as raças?",
    answer: "Sim, nossas receitas servem para todas as raças, o que mudará será a quantidade por porção que deverá ser utilizada."
  },
  {
    question: "Como eu vou receber essas receitas?",
    answer: "O acesso é imediato logo após a confirmação do pagamento. Você receberá pelo e-mail que realizar a compra."
  },
  {
    question: "Recebo os e-books assim que pagar?",
    answer: "Para pagamentos no pix ou cartão de crédito você recebe o acesso aos E-books imediatamente em seu e-mail. Para pagamentos no boleto pode levar até um dia útil para compensar o pagamento."
  },
  {
    question: "Existe uma garantia?",
    answer: "Sim, fique tranquila. Nossas receitas foram preparadas com tanto carinho que temos a certeza que gostará do material, por isso você tem 7 dias de garantia, caso você ache que nossas receitas não lhe ajudaram nenhum pouco nós te devolveremos todo o valor pago."
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  key?: number | string;
}

function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-bold text-gray-900 flex items-center gap-2">
          <ChevronDown className={`w-5 h-5 text-brand-green transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          {question}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-gray-50 text-gray-700 border-t border-gray-200">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-white pt-10 pb-6 border-b-4 border-brand-green">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight"
          >
            Receitas que milhares de papais e mamães de pet estão utilizando para{' '}
            <span className="bg-brand-green text-white px-2 py-1 inline-block">VARIAR A ALIMENTAÇÃO</span>{' '}
            de seu cãozinho de forma{' '}
            <span className="bg-brand-green text-white px-2 py-1 inline-block">FÁCIL</span>{' '}
            e com{' '}
            <span className="bg-brand-green text-white px-2 py-1 inline-block">INGREDIENTES BARATOS</span>
          </motion.h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Product Showcase */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex flex-col items-center gap-8">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative w-full max-w-2xl"
              >
                <img 
                  src="https://apaixonadosporshihtzu.com/wp-content/uploads/2024/10/Bonus-exclusivo-gratuito-1024x576.png.webp" 
                  alt="Ebooks de Receitas" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full flex flex-col items-center gap-6"
              >
                <a href="https://pay.kiwify.com.br/Y4Cuat4" className="btn-primary w-full md:w-auto">
                  SIM! EU QUERO EBOOK DE RECEITAS POR R$19,90
                </a>
                
                <img 
                  src="https://apaixonadosporshihtzu.com/wp-content/uploads/2023/04/Compra-Segura-1024x94.png.webp" 
                  alt="Compra Segura" 
                  className="w-full max-w-md h-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 mt-12 w-full">
                {/* Features */}
                <motion.div 
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                    <Utensils className="text-brand-green" /> O que você vai encontrar:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "30 receitas caseiras fáceis",
                      "Modo de preparo completo",
                      "Receitas Nutritivas",
                      "Receitas de bolo para pet",
                      "Ingredientes baratos",
                      "Varie a alimentação do seu pet"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <ArrowRight className="w-5 h-5 text-brand-green flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Bonus */}
                <motion.div 
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-brand-red flex items-center gap-2 mb-6">
                    <Star className="fill-brand-red" /> BÔNUS EXCLUSIVOS:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Lista de alimentos proibidos",
                      "Receitas para cães obesos",
                      "Receitas para cães idosos",
                      "Receitas para cães com alergias atópicas",
                      "Frutas ideais para seu pet",
                      "Dicas nutricionais de alimentação",
                      "Receitas de petiscos saudáveis"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="w-full flex flex-col items-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-brand-green font-bold text-lg">
                  <PawPrint className="w-6 h-6" />
                  <span>Leve o Bônus Gratuitamente</span>
                </div>
                <a href="https://pay.kiwify.com.br/Y4Cuat4" className="btn-primary w-full md:w-auto">
                  SIM! EU QUERO EBOOK DE RECEITAS POR R$19,90
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-center font-black mb-12">
              VEJA OS <span className="bg-brand-green text-white px-2">DEPOIMENTOS DE QUEM JÁ COMPROU</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6 flex-grow">"{t.text}"</p>
                  <div className="flex items-center gap-3 text-left w-full border-t pt-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-green" />
                    <div>
                      <h4 className="font-bold text-sm">{t.name}</h4>
                      <p className="text-xs text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://picsum.photos/seed/dogbg/1920/1080?blur=10" 
              className="w-full h-full object-cover" 
              alt="Background"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="container-custom relative z-10 text-center">
            <p className="text-xl md:text-2xl mb-4">
              Se você se identificou com pelo menos uma das situações acima,{' '}
              <span className="bg-brand-green px-2">clique no botão abaixo</span>{' '}
              receba agora{' '}
              <span className="bg-brand-green px-2">o e-book juntamente com o Bônus</span>{' '}
              em seu E-mail por apenas:
            </p>
            
            <div className="my-10">
              <p className="text-yellow-400 text-2xl line-through opacity-80">De 59,90 por apenas</p>
              <motion.p 
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                className="text-7xl md:text-9xl font-black text-white"
              >
                19,90
              </motion.p>
            </div>

            <a href="https://pay.kiwify.com.br/Y4Cuat4" className="btn-primary w-full md:w-auto mb-8">
              SIM! EU QUERO EBOOK DE RECEITAS POR R$19,90
            </a>

            <div className="flex flex-col items-center gap-4">
              <img 
                src="https://apaixonadosporshihtzu.com/wp-content/uploads/2023/04/Compra-Segura-1024x94.png.webp" 
                alt="Compra Segura" 
                className="w-full max-w-md h-auto invert brightness-0"
                referrerPolicy="no-referrer"
              />
              <p className="text-sm text-gray-400 max-w-md">
                O E-book vai em formato PDF e você poderá visualizar todo o conteúdo em seu celular, tablet ou computador.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white border-y-4 border-brand-green">
          <div className="container-custom">
            <h2 className="text-center font-black mb-12">
              DÚVIDAS <span className="text-brand-green">FREQUENTES</span>
            </h2>
            <div className="max-w-2xl mx-auto">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <motion.div 
                initial={{ rotate: -10, opacity: 0 }}
                whileInView={{ rotate: 0, opacity: 1 }}
                className="w-48 h-48 flex-shrink-0"
              >
                <img 
                  src="https://apaixonadosporshihtzu.com/wp-content/uploads/2023/04/7dias-1.png.webp" 
                  alt="7 Dias de Garantia" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="flex-grow">
                <h2 className="text-2xl md:text-3xl font-black mb-4">
                  Satisfação Garantida e <span className="text-brand-green">Risco Zero!</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Eu acredito tanto que este e-book irá te gerar um ótimo resultado que te ofereço uma garantia de 7 dias para você experimentar o conteúdo. Se você acreditar que nossas receitas não te ajudaram nem um pouco, se não ficar satisfeito com o conteúdo ou se você se arrepender por qualquer outro motivo, basta me enviar um e-mail e eu devolvo 100% do seu dinheiro. Sem questionamentos e sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-gray-900 py-10 text-center border-t border-gray-800">
        <div className="container-custom">
          <p className="text-gray-400 text-sm">
            Apaixonados por Shihtzu – Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
