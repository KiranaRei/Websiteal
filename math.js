import questions from '../math_questions_900.json'

export default function handler(req, res) {
  // pilih soal random
  const random = questions[Math.floor(Math.random() * questions.length)]

  res.status(200).json({
    result: {
      soal: random.soal,
      jawaban: random.jawaban,
      deskripsi: random.deskripsi
    }
  })
}
