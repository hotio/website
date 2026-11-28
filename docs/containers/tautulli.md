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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32760" onclick="CopyToClipboard('tag32760');return false;" class="tag-decoration">release</div><div id="tag11005" onclick="CopyToClipboard('tag11005');return false;" class="tag-decoration">release-3cd882d</div><div id="tag25430" onclick="CopyToClipboard('tag25430');return false;" class="tag-decoration">release-2.19.1</div><div id="tag25232" onclick="CopyToClipboard('tag25232');return false;" class="tag-decoration">release-v2</div><div id="tag12990" onclick="CopyToClipboard('tag12990');return false;" class="tag-decoration">release-v2.19</div><div id="tag16297" onclick="CopyToClipboard('tag16297');return false;" class="tag-decoration">release-v2.19.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/3cd882ddceffed1c99116c9f56ac44406836acf8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/46097307869" target="_blank">2026-11-28 02:17:09</a></td></tr>
<tr><td><div id="tag6462" onclick="CopyToClipboard('tag6462');return false;" class="tag-decoration">testing</div><div id="tag20953" onclick="CopyToClipboard('tag20953');return false;" class="tag-decoration">testing-dd7408d</div><div id="tag1488" onclick="CopyToClipboard('tag1488');return false;" class="tag-decoration">testing-2.19.1</div><div id="tag2408" onclick="CopyToClipboard('tag2408');return false;" class="tag-decoration">testing-v2</div><div id="tag17989" onclick="CopyToClipboard('tag17989');return false;" class="tag-decoration">testing-v2.19</div><div id="tag21655" onclick="CopyToClipboard('tag21655');return false;" class="tag-decoration">testing-v2.19.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/dd7408d3ebc55e5df0b50eb6d83018d0a6637cb8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/46097303513" target="_blank">2026-11-28 02:17:05</a></td></tr>
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
