"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Code, Upload, CheckCircle2, Download, Settings, FileCode, Folder, ArrowRight, Copy, Terminal } from "lucide-react"
import { motion } from "framer-motion"

export default function OdooIntegration() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d5a80]/20 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#5bbad5]/10 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3d5a80]/20 border border-[#3d5a80]/30 text-[#5bbad5] text-sm font-medium mb-4">
              ERP Integration
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Odoo <span className="bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] bg-clip-text text-transparent">Integration Guide</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Seamlessly integrate Tangier Logistics Center data with your Odoo ERP system for 
              real-time tracking, reporting, and operational management
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Database, title: "Real-Time Sync", desc: "Auto-sync shipment status and tracking data", color: "#5bbad5" },
              { icon: Settings, title: "Automated Workflows", desc: "Streamline invoicing and notifications", color: "#3d5a80" },
              { icon: CheckCircle2, title: "Compliance Reports", desc: "Generate audit trails automatically", color: "#10b981" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5 hover:border-[#5bbad5]/30 transition-all h-full">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
                      border: `1px solid ${item.color}30`
                    }}
                  >
                    <item.icon className="h-6 w-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <Tabs defaultValue="structure" className="mb-16">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-8 bg-[#111827] border border-white/10">
              <TabsTrigger value="structure" className="data-[state=active]:bg-[#5bbad5] data-[state=active]:text-white text-sm">
                Theme Structure
              </TabsTrigger>
              <TabsTrigger value="setup" className="data-[state=active]:bg-[#5bbad5] data-[state=active]:text-white text-sm">
                Setup
              </TabsTrigger>
              <TabsTrigger value="api" className="data-[state=active]:bg-[#5bbad5] data-[state=active]:text-white text-sm">
                API Guide
              </TabsTrigger>
              <TabsTrigger value="upload" className="data-[state=active]:bg-[#5bbad5] data-[state=active]:text-white text-sm">
                Upload
              </TabsTrigger>
            </TabsList>

            <TabsContent value="structure">
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5">
                  <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Odoo Theme Module Structure
                  </h2>
                  <p className="text-gray-400 mb-6">
                    To upload this website as an Odoo theme, structure your module as follows:
                  </p>
                  
                  <div className="bg-[#0d1421] rounded-xl p-6 border border-white/5 font-mono text-sm">
                    <div className="flex items-center gap-2 text-[#5bbad5] mb-4">
                      <Folder className="h-4 w-4" />
                      <span>theme_tangier_logistics/</span>
                    </div>
                    <div className="ml-6 space-y-2 text-gray-400">
                      <div className="flex items-center gap-2">
                        <FileCode className="h-4 w-4 text-[#10b981]" />
                        <span>__manifest__.py</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileCode className="h-4 w-4 text-[#10b981]" />
                        <span>__init__.py</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Folder className="h-4 w-4 text-[#3d5a80]" />
                        <span>static/</span>
                      </div>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <Folder className="h-4 w-4 text-[#3d5a80]" />
                          <span>src/</span>
                        </div>
                        <div className="ml-6 space-y-2">
                          <div className="flex items-center gap-2">
                            <Folder className="h-4 w-4 text-[#5bbad5]" />
                            <span>scss/</span>
                          </div>
                          <div className="ml-6 flex items-center gap-2">
                            <FileCode className="h-4 w-4 text-[#5bbad5]" />
                            <span>primary_variables.scss</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Folder className="h-4 w-4 text-[#5bbad5]" />
                            <span>js/</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Folder className="h-4 w-4 text-[#5bbad5]" />
                            <span>img/</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Folder className="h-4 w-4 text-[#3d5a80]" />
                        <span>views/</span>
                      </div>
                      <div className="ml-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <FileCode className="h-4 w-4 text-[#5bbad5]" />
                          <span>pages.xml</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileCode className="h-4 w-4 text-[#5bbad5]" />
                          <span>snippets.xml</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileCode className="h-4 w-4 text-[#5bbad5]" />
                          <span>options.xml</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    __manifest__.py Configuration
                  </h3>
                  <div className="bg-[#0d1421] rounded-xl p-4 border border-white/5 font-mono text-sm overflow-x-auto">
                    <pre className="text-emerald-400">{`{
    'name': 'Tangier Logistics Center Theme',
    'description': 'Professional logistics website theme',
    'category': 'Website/Theme',
    'version': '18.0.1.0.0',
    'author': 'Tangier Logistics Center',
    'license': 'LGPL-3',
    'depends': ['website'],
    'data': [
        'views/pages.xml',
        'views/snippets.xml',
        'views/options.xml',
    ],
    'assets': {
        'web._assets_primary_variables': [
            'theme_tangier_logistics/static/src/scss/primary_variables.scss',
        ],
        'web.assets_frontend': [
            'theme_tangier_logistics/static/src/scss/theme.scss',
            'theme_tangier_logistics/static/src/js/theme.js',
        ],
    },
    'images': [
        'static/description/banner.png',
        'static/description/theme_screenshot.png',
    ],
    'application': False,
    'installable': True,
    'auto_install': False,
}`}</pre>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5">
                  <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    SCSS Variables (primary_variables.scss)
                  </h3>
                  <div className="bg-[#0d1421] rounded-xl p-4 border border-white/5 font-mono text-sm overflow-x-auto">
                    <pre className="text-emerald-400">{`$o-website-values-palettes: (
    'tangier-logistics': (
        'color-palettes-name': 'Tangier Logistics Center',
        'menu': #0a0f1a,
        'header': #0a0f1a,
        'footer': #070b14,
        'copyright': #050810,
        'o-color-1': #5bbad5,
        'o-color-2': #3d5a80,
        'o-color-3': #293d5a,
        'o-color-4': #111827,
        'o-color-5': #0a0f1a,
        'o-base-color': #f0f4f8,
        'menu-gradient': linear-gradient(135deg, #0a0f1a 0%, #3d5a80 100%),
        'header-boxed': false,
        'header-template': 'default',
        'footer-template': 'default',
    ),
);`}</pre>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="setup">
              <Card className="p-8 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  Step-by-Step Setup Guide
                </h2>
                
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Install Odoo XML-RPC Library",
                      code: "pip install odoo-client-lib",
                      desc: "Install the required library for Odoo API communication"
                    },
                    {
                      step: 2,
                      title: "Configure Connection Parameters",
                      code: `ODOO_URL = "https://your-domain.odoo.com"
ODOO_DB = "your_database_name"
ODOO_USERNAME = "admin@example.com"
ODOO_API_KEY = "your_api_key_here"`,
                      desc: "Set up your Odoo instance connection details"
                    },
                    {
                      step: 3,
                      title: "Create Custom Odoo Module",
                      code: `# __manifest__.py
{
    'name': 'Tangier Logistics Integration',
    'version': '18.0.1.0.0',
    'category': 'Logistics',
    'depends': ['base', 'stock', 'sale'],
    'data': ['views/shipment_views.xml'],
}`,
                      desc: "Create a custom module for logistics data models"
                    },
                    {
                      step: 4,
                      title: "Test Connection",
                      code: `import xmlrpc.client

url = "https://your-domain.odoo.com"
db = "your_database"
username = "admin@example.com"
password = "your_api_key"

common = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/common')
uid = common.authenticate(db, username, password, {})
print(f"Connected! User ID: {uid}")`,
                      desc: "Verify your connection is working correctly"
                    }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#5bbad5] to-[#3d5a80] text-white rounded-xl flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                          {item.title}
                        </h3>
                        <div className="relative bg-[#0d1421] rounded-xl p-4 border border-white/5 font-mono text-sm overflow-x-auto mb-3">
                          <button className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                            <Copy className="h-4 w-4" />
                          </button>
                          <pre className="text-emerald-400">{item.code}</pre>
                        </div>
                        <p className="text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="api">
              <Card className="p-8 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  API Integration Examples
                </h2>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: Code,
                      title: "Create Shipment Record",
                      code: `models = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/object')

shipment_id = models.execute_kw(
    db, uid, password,
    'tlc.shipment', 'create',
    [{
        'name': 'SHIP-2024-001',
        'container_number': 'TLCU1234567',
        'vessel_name': 'MSC Aurora',
        'arrival_date': '2024-01-15',
        'status': 'in_transit',
        'teus': 2500
    }]
)
print(f"Shipment created with ID: {shipment_id}")`
                    },
                    {
                      icon: Database,
                      title: "Query Shipment Status",
                      code: `shipments = models.execute_kw(
    db, uid, password,
    'tlc.shipment', 'search_read',
    [[['status', '=', 'in_transit']]],
    {'fields': ['name', 'container_number', 'arrival_date', 'status']}
)

for shipment in shipments:
    print(f"{shipment['name']}: {shipment['status']}")`
                    },
                    {
                      icon: Upload,
                      title: "Update Shipment Data",
                      code: `models.execute_kw(
    db, uid, password,
    'tlc.shipment', 'write',
    [[shipment_id], {
        'status': 'arrived',
        'actual_arrival_date': '2024-01-15 14:30:00',
        'notes': 'Customs clearance in progress'
    }]
)
print("Shipment status updated successfully")`
                    },
                    {
                      icon: Download,
                      title: "Export Performance Data",
                      code: `import csv

metrics = models.execute_kw(
    db, uid, password,
    'tlc.metrics', 'search_read',
    [[['date', '>=', '2024-01-01']]],
    {'fields': ['date', 'teus_handled', 'vessel_calls']}
)

with open('tlc_metrics.csv', 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=['date', 'teus_handled', 'vessel_calls'])
    writer.writeheader()
    writer.writerows(metrics)
    
print("Metrics exported to tlc_metrics.csv")`
                    }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        <item.icon className="h-5 w-5 text-[#5bbad5]" />
                        {item.title}
                      </h3>
                      <div className="relative bg-[#0d1421] rounded-xl p-4 border border-white/5 font-mono text-sm overflow-x-auto">
                        <button className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                          <Copy className="h-4 w-4" />
                        </button>
                        <pre className="text-emerald-400">{item.code}</pre>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="upload">
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-br from-[#111827] to-[#0d1421] border border-white/5">
                  <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Bulk Data Upload Guide
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        Prepare Your Data File
                      </h3>
                      <p className="text-gray-400 mb-4">
                        Create a CSV file with the following columns for shipment data:
                      </p>
                      <div className="bg-[#0d1421] p-4 rounded-xl border border-white/5">
                        <code className="text-sm text-[#5bbad5]">
                          container_number, vessel_name, arrival_date, departure_date, status, teus, cargo_type, origin_port, destination_port
                        </code>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        Upload Script
                      </h3>
                      <div className="relative bg-[#0d1421] rounded-xl p-4 border border-white/5 font-mono text-sm overflow-x-auto">
                        <button className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                          <Copy className="h-4 w-4" />
                        </button>
                        <pre className="text-emerald-400">{`import csv
import xmlrpc.client

url = "https://your-domain.odoo.com"
db = "your_database"
username = "admin@example.com"
password = "your_api_key"

common = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/common')
uid = common.authenticate(db, username, password, {})
models = xmlrpc.client.ServerProxy(f'{url}/xmlrpc/2/object')

with open('shipments.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        try:
            shipment_id = models.execute_kw(
                db, uid, password,
                'tlc.shipment', 'create',
                [row]
            )
            print(f"Created shipment: {row['container_number']}")
        except Exception as e:
            print(f"Error: {row['container_number']} - {str(e)}")

print("Bulk upload completed!")`}</pre>
                      </div>
                    </div>

                    <div className="bg-[#3d5a80]/20 border border-[#3d5a80]/50 rounded-xl p-6">
                      <h4 className="font-bold text-[#5bbad5] mb-3 flex items-center gap-2">
                        <Terminal className="h-5 w-5" />
                        Best Practices
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          Validate data before uploading
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          Use batch processing for large datasets
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          Implement error handling and logging
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          Schedule regular sync intervals
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                          Monitor API rate limits
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-r from-[#5bbad5] to-[#3d5a80] border-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      Need Help?
                    </h3>
                    <p className="text-white/80 mb-6">
                      Our technical team is available to assist with your Odoo integration
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-white text-[#3d5a80] hover:bg-gray-100 font-semibold">
                        Contact Technical Support
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="border-white text-white hover:bg-white/10">
                        Download Documentation
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}