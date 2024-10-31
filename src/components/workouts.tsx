import { Treinos, treinos } from '@/lib/workouts'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
export function Workouts() {
  return (
    <div className='w-full max-w-lg m-auto'>
      <h1 className='text-primary font-bold'>Lista de Treinos</h1>
      <Tabs defaultValue="treino 1" className='w-full mt-4'>
        <TabsList className='w-full justify-between gap-1'>
          {Object.keys(treinos).map((treinoKey) => (
            <TabsTrigger
              key={treinoKey}
              value={treinoKey}
              className='w-full uppercase'
            >
              {treinoKey}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.keys(treinos).map((treinoKey) => (
          <div key={treinoKey} className='mt-4'>

            {(treinos[treinoKey as keyof Treinos] || []).map((exercicio, index) => (
              <TabsContent value={treinoKey} key={index} >


                <Carousel className="w-full max-w-lg" >
                  <CarouselContent >
                    {exercicio.videoURL.map((url, i) => (
                      <CarouselItem key={i} className="w-full pt-5">
                        <iframe
                          className='w-full min-h-48'
                          src={`https://www.youtube.com/embed/${url}`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

                        ></iframe>
                        <h3>{exercicio.nome}</h3>
                        <p className='text-xs text-zinc-400'>{exercicio.descricao}</p>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {exercicio.videoURL.length > 1 && (
                    <>
                      <CarouselPrevious />
                      <CarouselNext />
                    </>

                  )}
                </Carousel>
              </TabsContent>
            ))}
          </div>
        ))}
      </Tabs>
    </div>
  )
}
