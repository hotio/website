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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5891" onclick="CopyToClipboard('tag5891');return false;" class="tag-decoration">release</div><div id="tag16486" onclick="CopyToClipboard('tag16486');return false;" class="tag-decoration">release-1c0ff84</div><div id="tag23924" onclick="CopyToClipboard('tag23924');return false;" class="tag-decoration">release-2.19.1</div><div id="tag27165" onclick="CopyToClipboard('tag27165');return false;" class="tag-decoration">release-v2</div><div id="tag21379" onclick="CopyToClipboard('tag21379');return false;" class="tag-decoration">release-v2.19</div><div id="tag11890" onclick="CopyToClipboard('tag11890');return false;" class="tag-decoration">release-v2.19.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/1c0ff844a8218740a0a8106a314daa9bb0a4c002" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42926467452" target="_blank">2026-11-10 23:49:17</a></td></tr>
<tr><td><div id="tag12135" onclick="CopyToClipboard('tag12135');return false;" class="tag-decoration">testing</div><div id="tag22930" onclick="CopyToClipboard('tag22930');return false;" class="tag-decoration">testing-a116592</div><div id="tag22726" onclick="CopyToClipboard('tag22726');return false;" class="tag-decoration">testing-2.19.1</div><div id="tag21324" onclick="CopyToClipboard('tag21324');return false;" class="tag-decoration">testing-v2</div><div id="tag9947" onclick="CopyToClipboard('tag9947');return false;" class="tag-decoration">testing-v2.19</div><div id="tag25505" onclick="CopyToClipboard('tag25505');return false;" class="tag-decoration">testing-v2.19.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/a116592e098d7783cb5ae8151cb47b756f82d6fc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/42926465624" target="_blank">2026-11-10 23:49:16</a></td></tr>
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
