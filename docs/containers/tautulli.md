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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21720" onclick="CopyToClipboard('tag21720');return false;" class="tag-decoration">release</div><div id="tag13777" onclick="CopyToClipboard('tag13777');return false;" class="tag-decoration">release-baa58fc</div><div id="tag1537" onclick="CopyToClipboard('tag1537');return false;" class="tag-decoration">release-2.16.0</div><div id="tag3747" onclick="CopyToClipboard('tag3747');return false;" class="tag-decoration">release-v2</div><div id="tag31593" onclick="CopyToClipboard('tag31593');return false;" class="tag-decoration">release-v2.16</div><div id="tag6467" onclick="CopyToClipboard('tag6467');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/baa58fc9a58131115ade0cba1f227f0eb2d5f276" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21064913405" target="_blank">2026-01-16 11:19:08</a></td></tr>
<tr><td><div id="tag31724" onclick="CopyToClipboard('tag31724');return false;" class="tag-decoration">testing</div><div id="tag27281" onclick="CopyToClipboard('tag27281');return false;" class="tag-decoration">testing-09ef3ae</div><div id="tag12269" onclick="CopyToClipboard('tag12269');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag16355" onclick="CopyToClipboard('tag16355');return false;" class="tag-decoration">testing-v2</div><div id="tag2954" onclick="CopyToClipboard('tag2954');return false;" class="tag-decoration">testing-v2.16</div><div id="tag18648" onclick="CopyToClipboard('tag18648');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/09ef3ae9ecf2560323fb14aa80f3679fdbbba8bc" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21063307228" target="_blank">2026-01-16 10:18:12</a></td></tr>
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
