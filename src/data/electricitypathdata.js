export const electricityPathData = {
  title: "Camino de Aprendizaje en Electricidad",
  description: "Un camino de aprendizaje que cubre los fundamentos de la electricidad, enfocado en Corriente Directa (DC)",
  items: [
    {
      id: 1,
      title: "Corriente Directa (DC)",
      description: "Fundamentos de la corriente directa y sus aplicaciones",
      summary: "La corriente directa (DC) es un tipo de flujo eléctrico que mantiene una dirección constante. Es fundamental en muchos dispositivos electrónicos y sistemas de energía.",
      resources: [
        "https://www.electronics-tutorials.ws/accircuits/ac-theory.html",
        "https://learn.sparkfun.com/tutorials/alternating-current-ac-vs-direct-current-dc/all"
      ],
      children: [
        { 
          id: 2,
          title: "Conceptos Básicos de Electricidad", 
          description: "Introducción a los principios fundamentales de la electricidad",
          summary: "Comprende los conceptos fundamentales como carga eléctrica, corriente, voltaje y resistencia. Aprende sobre conductores, aislantes y cómo se comportan los electrones en diferentes materiales.",
          resources: [
            "https://www.khanacademy.org/science/physics/electric-charge-electric-force-and-voltage",
            "https://www.allaboutcircuits.com/textbook/direct-current/chpt-1/electric-circuits/"
          ]
        },
        { 
          id: 3,
          title: "Ley de Ohm", 
          description: "Comprensión y aplicación de la Ley de Ohm",
          summary: "La Ley de Ohm describe la relación entre voltaje, corriente y resistencia en un circuito eléctrico. Es una herramienta fundamental para el análisis de circuitos.",
          resources: [
            "https://www.electronics-tutorials.ws/dccircuits/dcp_2.html",
            "https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/circuits-part-2"
          ]
        }
      ]
    }
  ]
};
