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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25187" onclick="CopyToClipboard('tag25187');return false;" class="tag-decoration">release</div><div id="tag20585" onclick="CopyToClipboard('tag20585');return false;" class="tag-decoration">release-0a38e25</div><div id="tag25460" onclick="CopyToClipboard('tag25460');return false;" class="tag-decoration">release-2.16.0</div><div id="tag25812" onclick="CopyToClipboard('tag25812');return false;" class="tag-decoration">release-v2</div><div id="tag15584" onclick="CopyToClipboard('tag15584');return false;" class="tag-decoration">release-v2.16</div><div id="tag25878" onclick="CopyToClipboard('tag25878');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/0a38e250482cf25e1bf9259957375db6f1542178" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21246779612" target="_blank">2026-01-22 11:29:55</a></td></tr>
<tr><td><div id="tag27726" onclick="CopyToClipboard('tag27726');return false;" class="tag-decoration">testing</div><div id="tag29638" onclick="CopyToClipboard('tag29638');return false;" class="tag-decoration">testing-e316136</div><div id="tag12929" onclick="CopyToClipboard('tag12929');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag25917" onclick="CopyToClipboard('tag25917');return false;" class="tag-decoration">testing-v2</div><div id="tag2860" onclick="CopyToClipboard('tag2860');return false;" class="tag-decoration">testing-v2.16</div><div id="tag15850" onclick="CopyToClipboard('tag15850');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/e3161365aa3072b649a146ac287414765183e53b" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/21246779866" target="_blank">2026-01-22 11:29:56</a></td></tr>
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
