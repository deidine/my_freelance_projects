import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, FileText, MapPin, Clock } from "lucide-react"

export default function UIUXSpecification() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">UI/UX Specifications: Civic Engagement Platform</h1>
      
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ui-elements">UI Elements</TabsTrigger>
          <TabsTrigger value="user-flows">User Flows</TabsTrigger>
          <TabsTrigger value="responsive">Responsive Design</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>
                Core specifications for the civic engagement platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Primary Function</h3>
                <p>
                  The platform serves as a centralized hub for youth-focused civic initiatives, 
                  connecting young citizens with resources, events, and funding opportunities. 
                  It facilitates community engagement by showcasing ongoing projects and providing 
                  tools for participation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Target Audience</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Young adults (18-35) interested in civic engagement</li>
                  <li>Community organizations and NGOs</li>
                  <li>Educational institutions</li>
                  <li>Government agencies focused on youth development</li>
                  <li>International partners and donors</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Performance Indicators (KPIs)</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>User engagement: Time spent on site, pages per session</li>
                  <li>Resource downloads: Number of resources accessed</li>
                  <li>Event participation: RSVP and attendance rates</li>
                  <li>Project applications: Number of submissions for funding</li>
                  <li>Newsletter signups: Growth rate of subscriber base</li>
                  <li>Mobile usage: Percentage of mobile vs desktop users</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Design Philosophy</h3>
                <p>
                  The design emphasizes accessibility, clarity, and cultural relevance. 
                  It balances professional presentation with approachable, youth-friendly elements
                  while respecting the multilingual and multicultural context of the target audience.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ui-elements" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>UI Elements & Visual Design</CardTitle>
              <CardDescription>
                Detailed specifications for visual and interactive elements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Color Palette</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="h-16 rounded-md bg-[#C26A2D]"></div>
                    <p className="text-sm font-medium">Primary: #C26A2D</p>
                    <p className="text-xs text-muted-foreground">Headers, CTAs, accents</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 rounded-md bg-[#E9E2D9]"></div>
                    <p className="text-sm font-medium">Secondary: #E9E2D9</p>
                    <p className="text-xs text-muted-foreground">Backgrounds, cards</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 rounded-md bg-[#2D7D9C]"></div>
                    <p className="text-sm font-medium">Accent: #2D7D9C</p>
                    <p className="text-xs text-muted-foreground">Links, buttons</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 rounded-md bg-[#333333]"></div>
                    <p className="text-sm font-medium">Text: #333333</p>
                    <p className="text-xs text-muted-foreground">Body text, headings</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Typography</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-1">Headings: Montserrat</h4>
                    <div className="space-y-2">
                      <p className="text-3xl font-bold">H1: 30px Bold</p>
                      <p className="text-2xl font-bold">H2: 24px Bold</p>
                      <p className="text-xl font-bold">H3: 20px Bold</p>
                      <p className="text-lg font-medium">H4: 18px Medium</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1">Body: Open Sans</h4>
                    <div className="space-y-2">
                      <p className="text-base">Body: 16px Regular</p>
                      <p className="text-sm">Small: 14px Regular</p>
                      <p className="text-xs">Caption: 12px Regular</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">Navigation</h4>
                    <div className="p-3 border rounded-md">
                      <div className="flex items-center justify-between bg-white p-2 rounded">
                        <div className="h-8 w-32 bg-[#C26A2D] rounded"></div>
                        <div className="flex space-x-3">
                          <div className="h-4 w-16 bg-gray-200 rounded"></div>
                          <div className="h-4 w-16 bg-gray-200 rounded"></div>
                          <div className="h-4 w-16 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Buttons</h4>
                    <div className="p-3 border rounded-md flex flex-wrap gap-3">
                      <Button>Primary Button</Button>
                      <Button variant="outline">Secondary Button</Button>
                      <Button variant="ghost">Text Button</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Cards</h4>
                    <div className="p-3 border rounded-md">
                      <Card className="max-w-xs">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">Event Title</CardTitle>
                          <CardDescription className="text-xs">April 7 - May 8</CardDescription>
                        </CardHeader>
                        <CardContent className="text-xs">
                          <p>Brief description of the event or resource...</p>
                        </CardContent>
                        <CardFooter className="pt-2">
                          <Button size="sm" variant="outline" className="text-xs">View Details</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Hero Section</h4>
                    <div className="p-3 border rounded-md">
                      <div className="bg-[#C26A2D] p-4 rounded-md text-white">
                        <div className="h-4 w-24 bg-white/20 rounded mb-2"></div>
                        <div className="h-6 w-48 bg-white/30 rounded mb-4"></div>
                        <div className="h-4 w-36 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="user-flows" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>User Flows & Wireframes</CardTitle>
              <CardDescription>
                Key user journeys and page structures
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Homepage Flow</h3>
                <div className="border rounded-md p-4">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="flex-1 min-w-0">
                      <div className="border border-dashed p-3 rounded-md mb-3">
                        <div className="h-6 w-32 bg-gray-200 rounded mb-2"></div>
                        <div className="h-4 w-full bg-gray-100 rounded"></div>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                        <div className="flex space-x-1">
                          <ChevronLeft className="h-4 w-4 text-gray-400" />
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="border p-2 rounded-md">
                            <div className="h-24 bg-gray-100 rounded-md mb-2"></div>
                            <div className="h-4 w-3/4 bg-gray-200 rounded mb-1"></div>
                            <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full md:w-64 shrink-0">
                      <div className="border border-dashed p-3 rounded-md">
                        <div className="h-5 w-full bg-gray-200 rounded mb-3"></div>
                        <div className="space-y-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-2 items-center">
                              <div className="h-10 w-10 bg-gray-100 rounded-md shrink-0"></div>
                              <div className="space-y-1 flex-1 min-w-0">
                                <div className="h-3 w-full bg-gray-200 rounded"></div>
                                <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#C26A2D] flex items-center justify-center text-white text-xs">1</div>
                      <p className="text-sm">User lands on homepage with featured slider</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#C26A2D] flex items-center justify-center text-white text-xs">2</div>
                      <p className="text-sm">Browses featured content and upcoming events</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#C26A2D] flex items-center justify-center text-white text-xs">3</div>
                      <p className="text-sm">Clicks on a specific project or event card</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Project Application Flow</h3>
                <div className="border rounded-md p-4">
                  <div className="flex flex-wrap gap-4 justify-between">
                    {['Project Info', 'Organization Details', 'Budget', 'Submit'].map((step, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className={`h-10 w-10 rounded-full ${i === 0 ? 'bg-[#2D7D9C]' : 'bg-gray-200'} flex items-center justify-center text-white text-sm`}>
                          {i + 1}
                        </div>
                        <p className="text-xs mt-1">{step}</p>
                        {i < 3 && <div className="h-0.5 w-12 bg-gray-200 mt-5 hidden md:block"></div>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border border-dashed p-4 rounded-md">
                    <div className="h-6 w-48 bg-gray-200 rounded mb-4"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-1">
                        <div className="h-4 w-24 bg-gray-100 rounded"></div>
                        <div className="h-10 w-full bg-gray-50 border rounded"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-4 w-24 bg-gray-100 rounded"></div>
                        <div className="h-10 w-full bg-gray-50 border rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-1 mb-4">
                      <div className="h-4 w-32 bg-gray-100 rounded"></div>
                      <div className="h-24 w-full bg-gray-50 border rounded"></div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm" disabled>Back</Button>
                      <Button size="sm">Next</Button>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#C26A2D] flex items-center justify-center text-white text-xs">1</div>
                      <p className="text-sm">User navigates to "Apply for Funding" section</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#C26A2D] flex items-center justify-center text-white text-xs">2</div>
                      <p className="text-sm">Completes multi-step application form</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#C26A2D] flex items-center justify-center text-white text-xs">3</div>
                      <p className="text-sm">Receives confirmation and next steps</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="responsive" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Responsive Design</CardTitle>
              <CardDescription>
                Adaptations for different screen sizes and devices
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Mobile (≤ 640px)</h3>
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <div className="h-4 w-2.5 border border-gray-400 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="border rounded-md p-3 h-80 flex flex-col">
                    <div className="h-12 border-b flex items-center justify-between px-2">
                      <div className="h-6 w-24 bg-gray-200 rounded"></div>
                      <div className="h-6 w-6 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex-1 p-2 space-y-3 overflow-hidden">
                      <div className="h-32 bg-gray-100 rounded-md"></div>
                      <div className="h-5 w-full bg-gray-200 rounded"></div>
                      <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                      <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1.5">
                    <li>• Single column layout</li>
                    <li>• Hamburger menu navigation</li>
                    <li>• Stacked content blocks</li>
                    <li>• Simplified hero section</li>
                    <li>• Touch-friendly tap targets (min 44px)</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Tablet (641px - 1024px)</h3>
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <div className="h-5 w-4 border border-gray-400 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="border rounded-md p-3 h-80 flex flex-col">
                    <div className="h-14 border-b flex items-center justify-between px-3">
                      <div className="h-8 w-32 bg-gray-200 rounded"></div>
                      <div className="flex space-x-2">
                        <div className="h-4 w-16 bg-gray-100 rounded"></div>
                        <div className="h-4 w-16 bg-gray-100 rounded"></div>
                        <div className="h-4 w-16 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 p-3 grid grid-cols-2 gap-3 overflow-hidden">
                      <div className="space-y-2">
                        <div className="h-24 bg-gray-100 rounded-md"></div>
                        <div className="h-5 w-full bg-gray-200 rounded"></div>
                        <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-24 bg-gray-100 rounded-md"></div>
                        <div className="h-5 w-full bg-gray-200 rounded"></div>
                        <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1.5">
                    <li>• Two-column layout for content</li>
                    <li>• Horizontal navigation menu</li>
                    <li>• Reduced padding and margins</li>
                    <li>• Optimized image sizes</li>
                    <li>• Horizontal scrolling for certain elements</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Desktop (≥ 1025px)</h3>
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <div className="h-4 w-6 border border-gray-400 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="border rounded-md p-3 h-80 flex flex-col">
                    <div className="h-16 border-b flex items-center justify-between px-4">
                      <div className="h-10 w-40 bg-gray-200 rounded"></div>
                      <div className="flex space-x-4">
                        <div className="h-5 w-20 bg-gray-100 rounded"></div>
                        <div className="h-5 w-20 bg-gray-100 rounded"></div>
                        <div className="h-5 w-20 bg-gray-100 rounded"></div>
                        <div className="h-5 w-20 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="flex-1 p-4 grid grid-cols-3 gap-4 overflow-hidden">
                      <div className="col-span-2 grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <div className="h-28 bg-gray-100 rounded-md"></div>
                          <div className="h-5 w-full bg-gray-200 rounded"></div>
                          <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-28 bg-gray-100 rounded-md"></div>
                          <div className="h-5 w-full bg-gray-200 rounded"></div>
                          <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                        </div>
                      </div>
                      <div className="border-l pl-3">
                        <div className="h-6 w-full bg-gray-200 rounded mb-3"></div>
                        <div className="space-y-2">
                          <div className="h-16 bg-gray-100 rounded-md"></div>
                          <div className="h-16 bg-gray-100 rounded-md"></div>
                          <div className="h-16 bg-gray-100 rounded-md"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="text-sm space-y-1.5">
                    <li>• Multi-column layout</li>
                    <li>• Full navigation with dropdowns</li>
                    <li>• Sidebar for secondary content</li>
                    <li>• Hover states and interactions</li>
                    <li>• Larger imagery and content areas</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Breakpoint Strategy</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left">Breakpoint</th>
                        <th className="py-2 px-4 text-left">Range</th>
                        <th className="py-2 px-4 text-left">Layout Changes</th>
                        <th className="py-2 px-4 text-left">Navigation</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4">Small</td>
                        <td className="py-2 px-4">≤ 640px</td>
                        <td className="py-2 px-4">Single column, stacked elements</td>
                        <td className="py-2 px-4">Hamburger menu</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4">Medium</td>
                        <td className="py-2 px-4">641px - 768px</td>
                        <td className="py-2 px-4">Two columns for some sections</td>
                        <td className="py-2 px-4">Simplified horizontal menu</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4">Large</td>
                        <td className="py-2 px-4">769px - 1024px</td>
                        <td className="py-2 px-4">Multi-column layout</td>
                        <td className="py-2 px-4">Full horizontal menu</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">Extra Large</td>
                        <td className="py-2 px-4">≥ 1025px</td>
                        <td className="py-2 px-4">Full layout with sidebar</td>
                        <td className="py-2 px-4">Full menu with dropdowns</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accessibility" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Accessibility & Performance</CardTitle>
              <CardDescription>
                Ensuring the platform is usable by all and performs well
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Accessibility Standards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-medium">WCAG 2.1 AA Compliance</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Sufficient color contrast (minimum 4.5:1 for normal text)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Keyboard navigation for all interactive elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Proper heading hierarchy (H1-H6)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Text alternatives for non-text content</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium">Assistive Technology Support</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>ARIA landmarks and roles for screen readers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Focus management for interactive elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Skip navigation links</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span>Form labels and error messages</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Multilingual Support</h3>
                <div className="border rounded-md p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Language Implementation</h4>
                      <ul className="space-y-1.5 text-sm">
                        <li>• Primary languages: Arabic and French</li>
                        <li>• RTL (Right-to-Left) support for Arabic</li>
                        <li>• Language toggle in header navigation</li>
                        <li>• Localized date and number formats</li>
                        <li>• Content translation management system</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Cultural Considerations</h4>
                      <ul className="space-y-1.5 text-sm">
                        <li>• Culturally appropriate imagery</li>
                        <li>• Region-specific content prioritization</li>
                        <li>• Localized examples and case studies</li>
                        <li>• Consideration of cultural color associations</li>
                        <li>• Local calendar and holiday awareness</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Performance Optimization</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-md p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-[#2D7D9C]" />
                        <h4 className="font-medium">Load Time Targets</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• First Contentful Paint: < 1.8s</li>\
                        <li>• Time to Interactive: < 3.5s</li>
                        <li>• Largest Contentful Paint: < 2.5s</li>
                        <li>• Cumulative Layout Shift: < 0.1</li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-[#2D7D9C]" />
                        <h4 className="font-medium">Asset Optimization</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• Responsive image sizing</li>
                        <li>• WebP image format with fallbacks</li>
                        <li>• Lazy loading for below-fold content</li>
                        <li>• Minified CSS and JavaScript</li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-5 w-5 text-[#2D7D9C]" />
                        <h4 className="font-medium">Network Considerations</h4>
                      </div>
                      <ul className="space-y-1 text-sm">
                        <li>• CDN for static assets</li>
                        <li>• Low-bandwidth mode option</li>
                        <li>• Offline capabilities for key content</li>
                        <li>• Reduced initial payload size</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-3">Mobile Network Optimization</h4>
                    <p className="text-sm mb-3">
                      Given the target regions may have variable network conditions, the platform will implement:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Critical CSS Inline</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">High Impact</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#2D7D9C] w-[90%]"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Progressive Image Loading</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">High Impact</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#2D7D9C] w-[85%]"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Text-Only Initial View</span>
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Medium Impact</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#2D7D9C] w-[65%]"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Cached API Responses</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">High Impact</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#2D7D9C] w-[80%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
