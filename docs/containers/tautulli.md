---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2625" onclick="CopyToClipboard('tag2625');return false;" class="tag-decoration">release</div><div id="tag23893" onclick="CopyToClipboard('tag23893');return false;" class="tag-decoration">release-82d63cd</div><div id="tag32514" onclick="CopyToClipboard('tag32514');return false;" class="tag-decoration">release-2.18.2</div><div id="tag32454" onclick="CopyToClipboard('tag32454');return false;" class="tag-decoration">release-v2</div><div id="tag12023" onclick="CopyToClipboard('tag12023');return false;" class="tag-decoration">release-v2.18</div><div id="tag17405" onclick="CopyToClipboard('tag17405');return false;" class="tag-decoration">release-v2.18.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/82d63cdca76701ae213823c459ad10a84676a46b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/37404954144" target="_blank">2026-10-06 02:36:28</a></td></tr>
<tr><td><div id="tag10415" onclick="CopyToClipboard('tag10415');return false;" class="tag-decoration">testing</div><div id="tag31976" onclick="CopyToClipboard('tag31976');return false;" class="tag-decoration">testing-def9e90</div><div id="tag11610" onclick="CopyToClipboard('tag11610');return false;" class="tag-decoration">testing-2.18.2</div><div id="tag12643" onclick="CopyToClipboard('tag12643');return false;" class="tag-decoration">testing-v2</div><div id="tag7238" onclick="CopyToClipboard('tag7238');return false;" class="tag-decoration">testing-v2.18</div><div id="tag18901" onclick="CopyToClipboard('tag18901');return false;" class="tag-decoration">testing-v2.18.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/def9e9025dacaa2067ecd5d5f6a0f2e442ede1ac" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/37494749268" target="_blank">2026-10-06 16:19:04</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
