---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3020" onclick="CopyToClipboard('tag3020');return false;" class="tag-decoration">release</div><div id="tag22018" onclick="CopyToClipboard('tag22018');return false;" class="tag-decoration">release-8031b8f</div><div id="tag4442" onclick="CopyToClipboard('tag4442');return false;" class="tag-decoration">release-9.0.3</div><div id="tag6019" onclick="CopyToClipboard('tag6019');return false;" class="tag-decoration">release-v9</div><div id="tag11452" onclick="CopyToClipboard('tag11452');return false;" class="tag-decoration">release-v9.0</div><div id="tag28710" onclick="CopyToClipboard('tag28710');return false;" class="tag-decoration">release-v9.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8031b8fc641d73f214cd88eecb09ab1dd74625e9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35698933631" target="_blank">2026-09-22 07:18:14</a></td></tr>
<tr><td><div id="tag11016" onclick="CopyToClipboard('tag11016');return false;" class="tag-decoration">testing</div><div id="tag859" onclick="CopyToClipboard('tag859');return false;" class="tag-decoration">testing-ec094e3</div><div id="tag8312" onclick="CopyToClipboard('tag8312');return false;" class="tag-decoration">testing-9.0.3</div><div id="tag15726" onclick="CopyToClipboard('tag15726');return false;" class="tag-decoration">testing-v9</div><div id="tag29653" onclick="CopyToClipboard('tag29653');return false;" class="tag-decoration">testing-v9.0</div><div id="tag23924" onclick="CopyToClipboard('tag23924');return false;" class="tag-decoration">testing-v9.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ec094e368c939740e9b09a3588b856130157d8c9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35698942097" target="_blank">2026-09-22 07:18:20</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
