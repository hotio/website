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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22151" onclick="CopyToClipboard('tag22151');return false;" class="tag-decoration">release</div><div id="tag606" onclick="CopyToClipboard('tag606');return false;" class="tag-decoration">release-22a076c</div><div id="tag22960" onclick="CopyToClipboard('tag22960');return false;" class="tag-decoration">release-2.17.0</div><div id="tag7827" onclick="CopyToClipboard('tag7827');return false;" class="tag-decoration">release-v2</div><div id="tag21256" onclick="CopyToClipboard('tag21256');return false;" class="tag-decoration">release-v2.17</div><div id="tag1358" onclick="CopyToClipboard('tag1358');return false;" class="tag-decoration">release-v2.17.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/22a076c04fc8956f96135569cb6c2bbbe81c69d2" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/24552148658" target="_blank">2026-04-17 06:54:38</a></td></tr>
<tr><td><div id="tag13799" onclick="CopyToClipboard('tag13799');return false;" class="tag-decoration">testing</div><div id="tag1007" onclick="CopyToClipboard('tag1007');return false;" class="tag-decoration">testing-7632911</div><div id="tag19812" onclick="CopyToClipboard('tag19812');return false;" class="tag-decoration">testing-2.17.0</div><div id="tag1740" onclick="CopyToClipboard('tag1740');return false;" class="tag-decoration">testing-v2</div><div id="tag20310" onclick="CopyToClipboard('tag20310');return false;" class="tag-decoration">testing-v2.17</div><div id="tag20612" onclick="CopyToClipboard('tag20612');return false;" class="tag-decoration">testing-v2.17.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/7632911842fa7df12447f889c539af7fdea46078" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/24552149079" target="_blank">2026-04-17 06:54:39</a></td></tr>
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
