# Test Repository Usage and Task Instructions

## A. **How to Use the Repository**

1. **Fork the Repository**

    - Fork the test repository to your GitHub account.

2. **Install Dependencies**

    - Run the following command in your local environment to install the required packages:
        ```bash
        npm install
        ```

3. **Run the Application**
    - Start the application using the following command:
        ```bash
        npm run dev
        ```

---

## B. **Code Formatting Setup**

- **Prettier** is pre-configured in the project to ensure consistent code formatting.
- Set up your editor to follow the project's formatting rules:
    - For **VSCode**, add the following settings in `.vscode/settings.json`:
        ```json
        {
            "editor.formatOnSave": true,
            "[javascript]": {
                "editor.defaultFormatter": "esbenp.prettier-vscode"
            },
            "[typescript]": {
                "editor.defaultFormatter": "esbenp.prettier-vscode"
            },
            "[typescriptreact]": {
                "editor.defaultFormatter": "esbenp.prettier-vscode"
            }
        }
        ```
    - For **other editors**, ensure that the `format on save` feature is enabled and configured to use Prettier.

---

## C. **Preparation Before Starting**

1. **Figma Link**
    - Access the provided **Figma link** to review the UI designs. (The link will be shared with you upon request.)
    - https://www.figma.com/design/ACuP2Jab656NAHQjPt3Nbp/Frontend-Developer-Test?node-id=2-2
2. **Request Access**

    - If you are unable to access the Figma file, request permission as soon as possible.

3. **Time Tracking**

    - Once you receive access to the Figma file, **start tracking your time**.
        - Record when you start and finish the task.
        - Accurately report the time taken to complete each task.

4. **Refer to Figma**

    - Follow the designs provided in Figma when implementing the pages.

5. **Design and UX/UI Improvements**
    - If you identify any areas for improvement or enhancement in the provided design and UX/UI, you are allowed to make changes.
    - For any modifications made, **provide a clear explanation** of:
        - What was improved.
        - Why the change was necessary.
        - How it benefits the user experience.

---

## D. **Tasks to Complete**

### **Task 1 - Landing Page Implementation**

- Build the Task 1 - `/landing-page` page based on the Figma design.
- For the **Task 1**, no REST API integration is required focus solely on creating the user interface.

### **Task 2 - Todo list Implementation**

- Build the Task 2 - `/todo-list` page based on the Figma design.

- **REST API intergation is required**, please follow the below API documentation.

**API Documentation**

API URL: `http://3.1.8.111:8080/todo`

```
# 1. Get Todo List
curl -X GET "http://3.1.8.111:8080/todo?name=[your-name]"

# 2. Write Todo
curl -X POST "http://3.1.8.111:8080/todo" \
-H "Content-Type: application/json" \
-d '{"name": "[your-name]", "title": "Buy groceries"}'

# 3. Delete Todo
curl -X DELETE "http://3.1.8.111:8080/todo" \
-H "Content-Type: application/json" \
-d '{"name": [your-name], "id": 123}'

```

---

## E. Style Guidelines

- All styles must be written in SCSS and located under the /src/styles/ directory.
- Follow the SCSS conventions and ensure all styles are modular and reusable.
- Use variables, mixins, and functions wherever applicable to improve code maintainability and readability.
- Import the SCSS files into your components or pages as needed.

## F. **Time Tracking and Submission Guidelines**

1. **Time Tracking**

    - Accurately record the time taken to complete each task:
        - `/ladning-page` Page: Start Time → End Time
        - `/todo-list` page: Start Time → End Time

2. **Design or UX/UI Improvements**

    - If you made changes or enhancements to the provided design, explain the following in your PR:
        - What improvements were made.
        - The reasoning behind the changes.
        - How the changes enhance usability or functionality.

3. **Git Workflow**

    - Work in a new branch created from your forked repository.
    - Branch naming convention: `feature/[your-name]`.

4. **Pull Request**
    - Once your tasks are completed, push your branch and create a Pull Request (PR) to your forked repository.
    - In the PR description, include:
        - A summary of the work you’ve done.
        - The time you first gain access to the Figma file in the format of HH:mm dd/MM/yyyy (Ex: 14:30 30/12/2024)
        - Time taken for each task.
        - Design/UX/UI improvements (if applicable).
        - Any issues faced and how they were resolved.
        - Suggestions for improvement, if any.

---

**Note:**

- Follow the Figma designs closely.
- Focus on clean, maintainable code.
- Record the time spent on each task for accuracy and transparency.
- If you improve the UX/UI, clearly document your changes and reasoning.
