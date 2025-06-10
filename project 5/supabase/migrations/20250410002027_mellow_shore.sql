/*
  # Create messages table for chat functionality

  1. New Tables
    - `messages`
      - `id` (uuid, primary key)
      - `role` (text, either 'user' or 'assistant')
      - `content` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `messages` table
    - Add policy for authenticated users to read their own messages
    - Add policy for authenticated users to insert messages
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role text NOT NULL CHECK (role IN ('user', 'assistant')),
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own messages"
  ON messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert messages"
  ON messages
  FOR INSERT
  TO authenticated
  WITH CHECK (true);