# workflow-charter-drill

A reference repository for LU 1.10 — Designing a Team Git Workflow Charter.

## Repository Structure

| Path | Purpose |
|---|---|
| `src/` | Application source code |
| `docs/` | Project documentation |
| `.github/` | GitHub configuration: PR template, CODEOWNERS, workflows |
| `AUDIT.md` | Repository workflow audit findings |
| `BRANCHING.md` | Branch naming, protection, and lifecycle standards |
| `WORKFLOW-CHARTER.md` | Complete team workflow governance document |

## Governance Files

| File | What It Does |
|---|---|
| `.github/PULL_REQUEST_TEMPLATE.md` | Pre-fills every PR with required sections |
| `.github/CODEOWNERS` | Assigns required reviewers by file path |
| `BRANCHING.md` | Defines naming conventions and branch protection rules |
| `WORKFLOW-CHARTER.md` | Defines validation gates, release process, and rollback procedures |

## Branch Protection (main)

| Setting | Value | Reason |
|---|---|---|
| Required approvals | 2 | Two independent reviewers reduce the chance a subtle bug is missed |
| Dismiss stale reviews | On | A review before a new commit is not a review of the current code |
| Required status checks | On | Gates must pass before any merge |
| Restrict direct pushes | On | All changes must go through a PR regardless of role |

## Release Process

```bash
# Tag a release
git tag -a v1.3.0 -m "release: v1.3.0 - add bulk discount to checkout"
git push origin v1.3.0

# Emergency hotfix
git checkout main
git checkout -b hotfix/description-of-problem
# apply fix, commit, open PR, expedited review
git tag -a v1.3.1 -m "hotfix: v1.3.1 - brief description of fix"
```

## Rollback

| Scenario | Method | First Command |
|---|---|---|
| Bad commit on shared branch | git revert | `git revert [commit-hash]` |
| Widespread production failure | Redeploy previous tag | `git checkout v[previous-version]` |
