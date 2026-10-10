---
name: code-review
description: Review pull requests for correctness, security, and maintainability in the TechVisaAssist website repository.
---

# Code review

Review the pull request diff in the context of the surrounding code. Focus on concrete regressions or risks introduced by the changes; do not report speculative concerns or unrelated existing issues.

## What to check

- **Correctness and edge cases:** Verify behavior across relevant inputs, states, and supported languages. Check that links, forms, and interactions work as intended.
- **Security and privacy:** Look for unsafe handling of user input or personal data, exposed secrets, unnecessary third-party requests, and changes that weaken existing security protections.
- **Maintainability:** Check that changes fit the existing lightweight HTML, CSS, and JavaScript structure and avoid unnecessary complexity or duplication.
- **Tests and documentation:** Check that relevant behavior is tested and that user-facing or operational documentation is updated when the change calls for it.

## Report findings

List actionable findings first, grouped by severity (Critical, High, Medium, Low). For each finding, identify the affected file and line, explain the impact, and suggest a specific fix. Report only issues supported by the diff; if there are no findings, say so and briefly note any validation gaps.
