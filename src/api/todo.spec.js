/**
 * @jest-environment node
 */
import { term, like } from "@pact-foundation/pact/dsl/matchers";
import { pactWith } from "jest-pact";
import { todoApi } from "./todo";


pactWith({consumer: 'todo-web', provider: 'TodoApi'}, provider => {
    describe('todoItems', () => {
        const todoListRequest = {
            uponReceiving: "a request todo list",
            withRequest: {
              method: "GET",
              path: "/api/todoItems",
            },
        }
        describe('when todo list is empty', () => {
            const emptyTodoListResponse = {
                status: 200,
                headers: {
                  "Content-Type": "application/json",
                },
                body: [],
            }
            beforeEach(() => {
                const interaction = {
                  state: "Todo list is empty",
                  ...todoListRequest,
                  willRespondWith: emptyTodoListResponse,
                }
                return provider.addInteraction(interaction)
            });
            it('returns empty array', async () => {
                const api = todoApi(provider.mockService.baseUrl);
                const result = await api.todoItems();
                expect(result).toEqual([]);
            });
        });

        describe('when todo list has an item', () => {
            const oneItemTodoListResponse = {
                status: 200,
                headers: {
                  "Content-Type": "application/json",
                },
                body: [{
                    id: term({
                        generate: '2020-11-20T15:54:09.9567690+07:00',
                        matcher: '.*',
                    }),
                    name: like('Todo Item 1'),
                    isComplete: like(false),
                }],
            }
            beforeEach(() => {
                const interaction = {
                  state: "Todo list has an item",
                  ...todoListRequest,
                  willRespondWith: oneItemTodoListResponse,
                }
                return provider.addInteraction(interaction)
            });
            it('returns the actual todo items', async () => {
                const api = todoApi(provider.mockService.baseUrl);
                const result = await api.todoItems();
                expect(result).toEqual([{
                    id: '2020-11-20T15:54:09.9567690+07:00',
                    name: 'Todo Item 1',
                    isComplete: false,
                }]);
            });
        });
    
    });
});