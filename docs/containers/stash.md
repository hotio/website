---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8183" onclick="CopyToClipboard('tag8183');return false;" class="tag-decoration">nightly</div><div id="tag3575" onclick="CopyToClipboard('tag3575');return false;" class="tag-decoration">nightly-7ff4eb5</div><div id="tag31928" onclick="CopyToClipboard('tag31928');return false;" class="tag-decoration">nightly-34f8a384a11a45bd8eeb8fea15d163db643236bc</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/7ff4eb56e417685a07b307d4329b339738596a4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/42142454869" target="_blank">2026-11-06 01:14:08</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3471" onclick="CopyToClipboard('tag3471');return false;" class="tag-decoration">release</div><div id="tag21563" onclick="CopyToClipboard('tag21563');return false;" class="tag-decoration">release-cb2a0dd</div><div id="tag462" onclick="CopyToClipboard('tag462');return false;" class="tag-decoration">release-0.32.0</div><div id="tag31020" onclick="CopyToClipboard('tag31020');return false;" class="tag-decoration">release-v0</div><div id="tag9704" onclick="CopyToClipboard('tag9704');return false;" class="tag-decoration">release-v0.32</div><div id="tag2538" onclick="CopyToClipboard('tag2538');return false;" class="tag-decoration">release-v0.32.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/cb2a0dd6726cf20dfbca56f6501a2b8192871292" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/42142474105" target="_blank">2026-11-06 01:14:17</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
