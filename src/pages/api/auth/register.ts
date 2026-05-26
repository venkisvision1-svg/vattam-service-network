import { connectToDatabase } from '@/lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, phone, name, role, password } = req.body

    if (!email || !phone || !name || !role) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const { db } = await connectToDatabase()
    const collection = db.collection('users')

    // Check if user already exists
    const existingUser = await collection.findOne({ email })
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' })
    }

    // In production, hash the password with bcrypt
    const newUser = {
      email,
      phone,
      name,
      role,
      verified: false,
      createdAt: new Date(),
    }

    const result = await collection.insertOne(newUser)

    return res.status(201).json({
      success: true,
      userId: result.insertedId,
      message: 'User registered successfully',
    })
  } catch (error) {
    console.error('Registration error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}