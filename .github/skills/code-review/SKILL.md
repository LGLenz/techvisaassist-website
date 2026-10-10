---
name: code-review
description: Review code changes for correctness, security, regressions, and missing tests. Use when asked to review a pull request, diff, or proposed code change.
---

# Code review

Review the proposed changes, not the author or unrelated pre-existing code. Focus on actionable defects that could affect correctness, security, reliability, accessibility, or maintainability.

## Workflow

1. Read the complete diff and identify the behavior each change is intended to affect.
2. Inspect surrounding code and relevant callers, tests, and configuration to understand the existing contracts.
3. Trace changed behavior through important inputs and edge cases. Check error handling, data validation, permissions, and resource handling where relevant.
4. Run focused existing tests or checks when practical. Do not modify files while performing a review.
5. Report only concrete findings supported by the code. If no actionable issues are found, say so and mention any important validation that could not be run.

## Findings

For each finding, include:

- Severity: critical, high, medium, or low.
- File and line number, pointing to the smallest relevant changed range.
- A concise explanation of the defect, when it occurs, and its user or system impact.
- A specific suggested correction when the fix is clear.

Prioritize findings from highest to lowest severity. Avoid speculative concerns, style preferences, and comments that do not identify a concrete problem. Do not report a concern as a finding if the proposed change already handles it.
