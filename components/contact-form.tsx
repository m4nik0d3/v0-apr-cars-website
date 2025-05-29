"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Introduce un email válido" }),
  phone: z.string().min(9, { message: "Introduce un número de teléfono válido" }),
  subject: z.string().min(1, { message: "Selecciona un asunto" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
  privacy: z.boolean().refine((val) => val === true, { message: "Debes aceptar la política de privacidad" }),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "info",
      message: "",
      privacy: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Construir el enlace mailto con los datos del formulario
      const subject = encodeURIComponent(`Contacto APR Cars: ${values.subject}`)
      const body = encodeURIComponent(
        `Nombre: ${values.name}\n` +
          `Email: ${values.email}\n` +
          `Teléfono: ${values.phone}\n\n` +
          `Mensaje:\n${values.message}`,
      )

      // Abrir el cliente de correo del usuario
      window.location.href = `mailto:pablo.sanchez@iesdecurtis.gal?subject=${subject}&body=${body}`

      // Mostrar mensaje de éxito
      toast({
        title: "Mensaje preparado",
        description: "Se ha abierto tu cliente de correo con el mensaje. Envíalo para completar el contacto.",
      })

      // Resetear el formulario
      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Ha ocurrido un error al procesar tu solicitud. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="600 123 456" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asunto</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="info" />
                    </FormControl>
                    <FormLabel className="font-normal">Información general</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="vehicle" />
                    </FormControl>
                    <FormLabel className="font-normal">Información sobre un vehículo</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="test-drive" />
                    </FormControl>
                    <FormLabel className="font-normal">Solicitar prueba de conducción</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="financing" />
                    </FormControl>
                    <FormLabel className="font-normal">Financiación</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder="Escribe tu mensaje aquí..." className="resize-none min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Acepto la política de privacidad y el tratamiento de mis datos</FormLabel>
                <FormDescription>
                  Tus datos serán tratados de acuerdo con nuestra política de privacidad.
                </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Enviar mensaje"
          )}
        </Button>
      </form>
    </Form>
  )
}
