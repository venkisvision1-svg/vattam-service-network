import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { email, password, role } = req.body

    if (!email || !password || !role) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Validate API key for admin/technician login
    if (role === 'admin' || role === 'technician') {
      const adminKey = req.headers['x-admin-key']
      if (adminKey !== process.env.ADMIN_SECRET_KEY) {
        return res.status(401).json({ error: 'Invalid credentials' })
      }
    }

    // In production, verify against database and hash password
    const token = Buffer.from(`${email}:${Date.now()}`).toString('base64')

    return res.status(200).json({
      success: true,
      token,
      role,
      message: 'Login successful',
    })
  } catch (error) {
    console.error('Login error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}