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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14032" onclick="CopyToClipboard('tag14032');return false;" class="tag-decoration">release</div><div id="tag30438" onclick="CopyToClipboard('tag30438');return false;" class="tag-decoration">release-d42c86a</div><div id="tag19206" onclick="CopyToClipboard('tag19206');return false;" class="tag-decoration">release-2.16.0</div><div id="tag22559" onclick="CopyToClipboard('tag22559');return false;" class="tag-decoration">release-v2</div><div id="tag24936" onclick="CopyToClipboard('tag24936');return false;" class="tag-decoration">release-v2.16</div><div id="tag22295" onclick="CopyToClipboard('tag22295');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/d42c86abb234efe17e53b39642b468f4c89b75f9" target="_blank">Upstream update: alpinevpn-d6f9da1 => alpinevpn-3043df9</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21065745613" target="_blank">2026-01-16 11:53:07</a></td></tr>
<tr><td><div id="tag12736" onclick="CopyToClipboard('tag12736');return false;" class="tag-decoration">testing</div><div id="tag26968" onclick="CopyToClipboard('tag26968');return false;" class="tag-decoration">testing-1a5d5e0</div><div id="tag15614" onclick="CopyToClipboard('tag15614');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag31254" onclick="CopyToClipboard('tag31254');return false;" class="tag-decoration">testing-v2</div><div id="tag13994" onclick="CopyToClipboard('tag13994');return false;" class="tag-decoration">testing-v2.16</div><div id="tag8259" onclick="CopyToClipboard('tag8259');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/1a5d5e04b555d9fd563c0edc1e3477ad92bf25f5" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21064914066" target="_blank">2026-01-16 11:19:09</a></td></tr>
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
