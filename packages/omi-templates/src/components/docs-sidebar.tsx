import { tag, Component } from 'omi'

type SidebarItem = {
  text: string
  href: string
  target: string
  name: string
  path: string
  value: string
  type: string
  img?: string
  inner?: string
  children: any[]
  tag?: string
  childrenHeight?: number
  isOpen?: boolean
  icon?: string
}

type Props = {
  items: SidebarItem[]
  active: string
  isOpen: boolean
}

@tag('o-docs-sidebar')
export class Sidebar extends Component<Props> {
  static css = `
  :host {
    display: block;
  }
  `

  render() {
    return (
      <nav class="text-base lg:text-sm">
        <ul role="list" class="space-y-9">
          <li>
            <h2 class="font-display font-medium text-zinc-900 dark:text-white">Introduction</h2>
            <ul
              role="list"
              class="mt-2 space-y-2 border-l-2 border-zinc-100 lg:mt-4 lg:space-y-4 lg:border-zinc-200 dark:border-zinc-700"
            >
              <li class="relative">
                <a
                  class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-zinc-500 before:hidden before:bg-zinc-300 hover:text-zinc-600 hover:before:block dark:text-zinc-400 dark:before:bg-zinc-700 dark:hover:text-zinc-300"
                  href="/"
                >
                  Getting started
                </a>
              </li>
              <li class="relative">
                <a
                  class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-primary before:bg-primary brightness-125"
                  href="/docs/installation"
                >
                  Installation
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h2 class="font-display font-medium text-zinc-900 dark:text-white">Core concepts</h2>
            <ul
              role="list"
              class="mt-2 space-y-2 border-l-2 border-zinc-100 lg:mt-4 lg:space-y-4 lg:border-zinc-200 dark:border-zinc-700"
            >
              <li class="relative">
                <a
                  class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-zinc-500 before:hidden before:bg-zinc-300 hover:text-zinc-600 hover:before:block dark:text-zinc-400 dark:before:bg-zinc-700 dark:hover:text-zinc-300"
                  href="/docs/understanding-caching"
                >
                  Understanding caching
                </a>
              </li>
              <li class="relative">
                <a
                  class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-zinc-500 before:hidden before:bg-zinc-300 hover:text-zinc-600 hover:before:block dark:text-zinc-400 dark:before:bg-zinc-700 dark:hover:text-zinc-300"
                  href="/docs/predicting-user-behavior"
                >
                  Predicting user behavior
                </a>
              </li>
              <li class="relative">
                <a
                  class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-zinc-500 before:hidden before:bg-zinc-300 hover:text-zinc-600 hover:before:block dark:text-zinc-400 dark:before:bg-zinc-700 dark:hover:text-zinc-300"
                  href="/docs/basics-of-time-travel"
                >
                  Basics of time-travel
                </a>
              </li>
              <li class="relative">
                <a
                  class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-zinc-500 before:hidden before:bg-zinc-300 hover:text-zinc-600 hover:before:block dark:text-zinc-400 dark:before:bg-zinc-700 dark:hover:text-zinc-300"
                  href="/docs/introduction-to-string-theory"
                >
                  Introduction to string theory
                </a>
              </li>
              <li class="relative">
                <a
                  class="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-zinc-500 before:hidden before:bg-zinc-300 hover:text-zinc-600 hover:before:block dark:text-zinc-400 dark:before:bg-zinc-700 dark:hover:text-zinc-300"
                  href="/docs/the-butterfly-effect"
                >
                  The butterfly effect
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}
