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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29039" onclick="CopyToClipboard('tag29039');return false;" class="tag-decoration">release</div><div id="tag3476" onclick="CopyToClipboard('tag3476');return false;" class="tag-decoration">release-2380833</div><div id="tag17912" onclick="CopyToClipboard('tag17912');return false;" class="tag-decoration">release-2.16.0</div><div id="tag7001" onclick="CopyToClipboard('tag7001');return false;" class="tag-decoration">release-v2</div><div id="tag1611" onclick="CopyToClipboard('tag1611');return false;" class="tag-decoration">release-v2.16</div><div id="tag12281" onclick="CopyToClipboard('tag12281');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/23808334fdf48e6a9bd4bc259add5966a996ff28" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21426217602" target="_blank">2026-01-28 05:23:45</a></td></tr>
<tr><td><div id="tag17975" onclick="CopyToClipboard('tag17975');return false;" class="tag-decoration">testing</div><div id="tag10373" onclick="CopyToClipboard('tag10373');return false;" class="tag-decoration">testing-453c97e</div><div id="tag7454" onclick="CopyToClipboard('tag7454');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag25277" onclick="CopyToClipboard('tag25277');return false;" class="tag-decoration">testing-v2</div><div id="tag5501" onclick="CopyToClipboard('tag5501');return false;" class="tag-decoration">testing-v2.16</div><div id="tag2118" onclick="CopyToClipboard('tag2118');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/453c97e6339a3c94ab49ec73d7df8fa594a98508" target="_blank">Upstream update: alpinevpn-7ce2a5c => alpinevpn-24b1ed4</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21426217860" target="_blank">2026-01-28 05:23:46</a></td></tr>
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
