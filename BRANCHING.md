# Branching Strategy

This document defines the naming conventions, protection rules, and lifecycle standards for all branches in this repository.

## Branch Naming Conventions

All branches must be prefixed according to their purpose:

| Prefix | Example | Purpose |
|---|---|---|
| `feature/` | `feature/add-discount-logic` | New functional requirements or enhancements |
| `bugfix/` | `bugfix/fix-checkout-hang` | Corrections to existing code in non-production states |
| `hotfix/` | `hotfix/patch-payment-gateway` | Urgent fixes for critical production issues |
| `release/` | `release/v1.2.0` | Preparation for a production deployment |
| `chore/` | `chore/update-dependencies` | Maintenance tasks that do not change application logic |

## Protected Branches

The `main` branch is protected with the following requirements:

1. **Require 2 Approvals:** Two independent reviewers must approve a PR to ensure multiple perspectives catch subtle bugs.
2. **Dismiss Stale Reviews:** New commits automatically reset approvals, ensuring the current code is what was actually reviewed.
3. **Require Status Checks:** All validation gates (Lint, Test, Build) must pass before a merge is permitted.
4. **Restrict Direct Pushes:** No one, regardless of role, can push directly to main; all changes must undergo the PR process.

## Branch Lifecycle

1. **Creation:** All work starts from a fresh `main` branch.
2. **Commit Strategy:** Work in small, atomic commits with descriptive messages.
3. **Draft Phase:** Open a Pull Request as a "Draft" as soon as work begins to provide visibility.
4. **Review Phase:** Convert the PR to "Ready" once work is complete and all self-tests pass.
5. **Cleanup:** Once merged, the branch must be deleted immediately.
6. **Max Age:** No branch shall remain open for more than **14 days**. Long-lived branches must be broken into smaller features.

## Sync Policy

To prevent "merge hell," every branch must be synchronized with `main` at least every 48 hours using the following command:

```bash
git pull origin main --rebase
```
