import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function EarningsPage() {
  return (
    <div className="h-screen overflow-auto bg-gray-50/50">
      <div className="container p-8">
        <Card>
          <CardHeader>
            <CardTitle>Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Earnings content here...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

