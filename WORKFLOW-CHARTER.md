# Team Workflow Charter

## 1. Overview
This charter governs all code moving through the repository and defines the non-negotiable standards for collaboration and delivery. Following these protocols is not optional; they are the baseline requirements for ensuring system stability, security, and team trust.

## 2. Validation Gates

Every Pull Request must pass the following three automated gates:

1. **Lint:** Checks code style and syntax consistency. Failure blocks the PR. (Config: `.github/workflows/pr-validation.yml`)
2. **Unit Tests:** Verifies that all logic passes existing tests. Failure blocks the PR. (Config: `.github/workflows/pr-validation.yml`)
3. **Build:** Ensures the application compiles and is ready for packaging. Failure blocks the PR. (Config: `.github/workflows/pr-validation.yml`)

**The Non-Negotiable Rule:**
If any validation gate fails, the pull request does not merge. This applies regardless of deadline pressure, seniority, or urgency. The gate failing means a real problem was found that must be resolved before the code can be considered "done."

## 3. Release Practices

We use Semantic Versioning in the format `vMAJOR.MINOR.PATCH`.
- **MAJOR:** Breaking changes.
- **MINOR:** New features that are backward-compatible.
- **PATCH:** Backward-compatible bug fixes.

### Tagging a Release
Release tags must be created and pushed using the following format:
```bash
git tag -a v1.3.0 -m "release: v1.3.0 - add bulk discount to checkout"
git push origin v1.3.0
```

### Release Checklist
- [ ] All validation gates pass.
- [ ] Required reviewers (CODEOWNERS) have approved.
- [ ] Release notes are written and verified.
- [ ] Staging deployment is verified.
- [ ] On-call engineer for the release window is identified.

### Hotfix Process
Hotfixes bypass the standard `develop` flow (if present) but never bypass `main` quality.
1. Branch from `main`.
2. Apply the fix.
3. Open a PR with "EXPEDITED" tag for immediate review.
4. Merge and tag with a PATCH increment.

## 4. Rollback Readiness

In the event of failure, use one of these two methods:

| Method | Trigger Condition | First Command |
|---|---|---|
| **Git Revert** | Logic bug or bad commit on a shared branch. Adds a new commit to undo changes without rewriting history. | `git revert [hash]` |
| **Redeploy Tag** | Widespread production failure or infrastructure crash. This is a deployment action to restore the last known good state. | `git checkout v[previous-version]` |
