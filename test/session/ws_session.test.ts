import { WsSession } from "../../src/session/ws_session.js";
import 'jest';

describe("WsSession", () => {
  let wsSession: WsSession;

  beforeEach(() => {
    // Initialize the WsSession object with the necessary parameters
    wsSession = new WsSession("BotName", "Script");
  });

  afterEach(() => {
    // Clean up any resources used by the WsSession object
    // (e.g., close WebSocket connections)
    // ...
  });

  it("should create a new instance of WsSession", () => {
    // Assert that the WsSession object is created successfully
    expect(wsSession).toBeTruthy();
  });

  it("should have a session ID", () => {
    // Assert that the session ID is not empty
    expect(wsSession.get_session_id()).toBeTruthy();
  });

  it("should have a bot name", () => {
    // Assert that the bot name is not empty
    expect(wsSession.get_bot_name()).toBeTruthy();
  });

  it("should have a WebSocket server address", () => {
    // Assert that the WebSocket server address is not empty
    expect(wsSession.get_ws_addr()).toBeTruthy();
  });

  it("should handle WebSocket connection", () => {
    // Mock WebSocket object
    const mockWebSocket = {} as WebSocket;
    // Call the onWsConnection method
    wsSession.onWsConnection(mockWebSocket);
    // Assert that the instance is started
    expect(wsSession.instance_.start).toHaveBeenCalled();
    // Assert that the instance is run with the onInterruptEvent method
    expect(wsSession.instance_.run).toHaveBeenCalledWith(wsSession.onInterruptEvent);
  });

  it("should handle WebSocket messages", () => {
    // Mock WebSocket message
    const mockMessage = "Test message";
    // Call the onWsMessage method
    wsSession.onWsMessage(mockMessage);
    // Assert that the message is added to the message queue
    expect(wsSession.message_queue_).toContain(mockMessage);
  });

  it("should close WebSocket connection and perform cleanup", () => {
    // Mock WebSocket object
    const mockWebSocket = {} as WebSocket;
    // Call the onWsClose method
    wsSession.onWsClose();
    // Assert that the WebSocket connection is closed
    expect(mockWebSocket.close).toHaveBeenCalled();
    // Assert that the instance is closed
    expect(wsSession.instance_.close).toHaveBeenCalled();
  });

  it("should handle interrupt event", async () => {
    // Mock interrupt event and timer
    const mockInterruptEvent = {} as InterruptEvent;
    const mockTimer = 5;
    // Call the onInterruptEvent method
    await wsSession.onInterruptEvent(mockInterruptEvent, mockTimer);
    // Assert that the appropriate WebSocket messages are sent
    expect(wsSession.ws_.clients.forEach).toHaveBeenCalledWith(expect.any(Function));
    // Assert that the instance is pushed with input if message queue is not empty
    expect(wsSession.instance_.push_input).toHaveBeenCalled();
    // Assert that the promise resolves successfully
    expect(Promise.resolve()).resolves.toBeUndefined();
  });

  // Add more test cases for other methods and functionalities of the WsSession class
  // ...
});