
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from '@radix-ui/react-label'



function ChatBox() {
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center bg-slate-800 '>
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle className="font- lobster" >Create project</CardTitle>
                        <CardDescription className = "">Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Name of your project" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        
                        <Button>send</Button>
                    </CardFooter>
                </Card>

            </div>
        </>
    )
}

export default ChatBox