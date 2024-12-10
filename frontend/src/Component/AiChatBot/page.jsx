'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from 'ai/react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { 
  Search, 
  Clock, 
  FileText, 
  History, 
  UserCircle, 
  RefreshCw, 
  Paperclip, 
  ImageIcon, 
  Send,
  Sparkles,
  MessageSquare,
  Settings,
  HelpCircle,
  ChevronRight
} from 'lucide-react'

export default function Chat() {
  const { messages = [], input = '', handleInputChange, handleSubmit } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'initial-message',
        role: 'assistant',
        content: 'Hi! I\'m your interview practice assistant. How can I help you today?'
      }
    ],
    onError: (error) => {
      console.error('Chat error:', error);
    }
  })

  const [userName] = useState('John')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const commonPrompts = [
    {
      title: 'Tell me about your experience with React.js',
      icon: <UserCircle className="w-5 h-5" />,
      category: 'Technical'
    },
    {
      title: 'How do you handle challenging situations at work?',
      icon: <MessageSquare className="w-5 h-5" />,
      category: 'Behavioral'
    },
    {
      title: 'What are your salary expectations?',
      icon: <FileText className="w-5 h-5" />,
      category: 'HR'
    },
    {
      title: 'Describe a project you\'re most proud of',
      icon: <Sparkles className="w-5 h-5" />,
      category: 'Experience'
    }
  ]

  return (
    <div className="flex h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-lg">Interview AI</span>
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <MessageSquare className="w-4 h-4" />
              New Chat
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <History className="w-4 h-4" />
              History
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Categories</h3>
            <div className="space-y-1">
              {['Technical', 'Behavioral', 'HR', 'Experience'].map((category) => (
                <Button
                  key={category}
                  variant="ghost"
                  className="w-full justify-between text-sm"
                >
                  {category}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-800">
              Interview Practice Assistant
            </h1>
            <p className="text-gray-600 text-sm mt-1">
              Practice your interview skills with AI-powered feedback
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <div className="max-w-3xl mx-auto">
            {messages.length === 0 && (
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Hello, <span className="text-blue-600">{userName}</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Choose a prompt or ask your own question to start practicing
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {commonPrompts.map((prompt, index) => (
                    <Card
                      key={index}
                      className="p-4 cursor-pointer hover:shadow-md transition-all group"
                      onClick={() => handleInputChange({ target: { value: prompt.title } })}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                          {prompt.icon}
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium">{prompt.title}</div>
                          <div className="text-xs text-gray-500">{prompt.category}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {Array.isArray(messages) && messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className="text-sm">{message.content}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>

        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="relative">
              <Textarea
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                className="w-full pr-24 resize-none border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                rows={3}
                maxLength={1000}
              />
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <Button type="button" variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Button type="button" variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
                  <ImageIcon className="w-4 h-4" />
                </Button>
                <span className="text-sm text-gray-400">
                  {input.length}/1000
                </span>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Button
        className="fixed bottom-4 right-4 rounded-full shadow-lg"
        size="icon"
      >
        <HelpCircle className="w-5 h-5" />
      </Button>
    </div>
  )
}
