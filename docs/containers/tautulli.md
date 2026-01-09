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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28643" onclick="CopyToClipboard('tag28643');return false;" class="tag-decoration">release</div><div id="tag31950" onclick="CopyToClipboard('tag31950');return false;" class="tag-decoration">release-2.16.0</div><div id="tag19068" onclick="CopyToClipboard('tag19068');return false;" class="tag-decoration">release-da6239e</div><div id="tag30886" onclick="CopyToClipboard('tag30886');return false;" class="tag-decoration">release-v2</div><div id="tag8088" onclick="CopyToClipboard('tag8088');return false;" class="tag-decoration">release-v2.16</div><div id="tag26310" onclick="CopyToClipboard('tag26310');return false;" class="tag-decoration">release-v2.16.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/da6239e72c9cca4cacb57b2f8473d4849974ee9a" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20845771444" target="_blank">2026-01-09 08:22:46</a></td></tr>
<tr><td><div id="tag7096" onclick="CopyToClipboard('tag7096');return false;" class="tag-decoration">testing</div><div id="tag6178" onclick="CopyToClipboard('tag6178');return false;" class="tag-decoration">testing-2.16.0</div><div id="tag14622" onclick="CopyToClipboard('tag14622');return false;" class="tag-decoration">testing-f221c2a</div><div id="tag15859" onclick="CopyToClipboard('tag15859');return false;" class="tag-decoration">testing-v2</div><div id="tag1294" onclick="CopyToClipboard('tag1294');return false;" class="tag-decoration">testing-v2.16</div><div id="tag28587" onclick="CopyToClipboard('tag28587');return false;" class="tag-decoration">testing-v2.16.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/f221c2a297fb177b38043875e5351ea0b0dbe50a" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/20842481516" target="_blank">2026-01-09 05:41:16</a></td></tr>
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
        -e WEBUI_PORTS="8181/tcp" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

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
          - WEBUI_PORTS=8181/tcp
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
