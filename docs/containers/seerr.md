---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag23702" onclick="CopyToClipboard('tag23702');return false;" class="tag-decoration">nightly</div><div id="tag4377" onclick="CopyToClipboard('tag4377');return false;" class="tag-decoration">nightly-d162a67</div><div id="tag12658" onclick="CopyToClipboard('tag12658');return false;" class="tag-decoration">nightly-4939f13dbe00ab0d268373e2bf1f27513fd9d0fd</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/d162a67df87159071c37cd23fc9df70f4b64981d" target="_blank">Version update: cf4883a55ef2881c9c8113cfdfce891acc5f10de => 4939f13dbe00ab0d268373e2bf1f27513fd9d0fd</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22102358658" target="_blank">2026-02-17 14:28:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12554" onclick="CopyToClipboard('tag12554');return false;" class="tag-decoration">release</div><div id="tag18919" onclick="CopyToClipboard('tag18919');return false;" class="tag-decoration">release-dd2cc60</div><div id="tag21705" onclick="CopyToClipboard('tag21705');return false;" class="tag-decoration">release-3.0.1</div><div id="tag28161" onclick="CopyToClipboard('tag28161');return false;" class="tag-decoration">release-v3</div><div id="tag20391" onclick="CopyToClipboard('tag20391');return false;" class="tag-decoration">release-v3.0</div><div id="tag22815" onclick="CopyToClipboard('tag22815');return false;" class="tag-decoration">release-v3.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/dd2cc609dbdff03b4a0438321335a3e6be0bd143" target="_blank">Merge pull request #1 from ineednewpajamas/pnpm_bump--Bump pnpm to 10</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/22026546446" target="_blank">2026-02-15 00:07:51</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
