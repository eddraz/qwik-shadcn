import { component$ } from "@builder.io/qwik";
import { Header } from "./components/header";
import { SidebarNavigation } from "./components/sidebar-navigation";
import "./global.css";
import { Tooltip } from ".";

export default component$(() => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>

        <div class="relative flex min-h-screen flex-col bg-background">
          <Header />

          <main class="flex-1">
            <div class="border-b">
              <div class="px-8 flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                <SidebarNavigation />

                <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                  <div class="mx-auto w-full min-w-0">
                    <div class="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
                      <div class="truncate">Docs</div>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5">
                        <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                        </path>
                      </svg>
                      <div class="text-foreground">Accordion</div>

                      <Tooltip.Root>
                        <Tooltip.Panel>
                          Rasmus Madsen
                        </Tooltip.Panel>
                        <Tooltip.Trigger>
                          Trigger
                        </Tooltip.Trigger>
                      </Tooltip.Root>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </main>
        </div>
      </body>
    </>
  );
})