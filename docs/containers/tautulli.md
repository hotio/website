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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9337" onclick="CopyToClipboard('tag9337');return false;" class="tag-decoration">release</div><div id="tag18325" onclick="CopyToClipboard('tag18325');return false;" class="tag-decoration">release-ba2c187</div><div id="tag15524" onclick="CopyToClipboard('tag15524');return false;" class="tag-decoration">release-2.17.1</div><div id="tag18872" onclick="CopyToClipboard('tag18872');return false;" class="tag-decoration">release-v2</div><div id="tag13055" onclick="CopyToClipboard('tag13055');return false;" class="tag-decoration">release-v2.17</div><div id="tag24019" onclick="CopyToClipboard('tag24019');return false;" class="tag-decoration">release-v2.17.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/ba2c18730bc37e1a45367ae00e06fb27c4356544" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25715052107" target="_blank">2026-05-12 05:19:40</a></td></tr>
<tr><td><div id="tag26495" onclick="CopyToClipboard('tag26495');return false;" class="tag-decoration">testing</div><div id="tag11678" onclick="CopyToClipboard('tag11678');return false;" class="tag-decoration">testing-0086858</div><div id="tag10158" onclick="CopyToClipboard('tag10158');return false;" class="tag-decoration">testing-2.17.1</div><div id="tag7321" onclick="CopyToClipboard('tag7321');return false;" class="tag-decoration">testing-v2</div><div id="tag14738" onclick="CopyToClipboard('tag14738');return false;" class="tag-decoration">testing-v2.17</div><div id="tag16229" onclick="CopyToClipboard('tag16229');return false;" class="tag-decoration">testing-v2.17.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/0086858e0b0f29eb77a26e6a5c002a1713adbe1f" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/25927418352" target="_blank">2026-05-15 15:53:22</a></td></tr>
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
