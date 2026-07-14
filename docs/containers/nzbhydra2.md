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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11315" onclick="CopyToClipboard('tag11315');return false;" class="tag-decoration">release</div><div id="tag17972" onclick="CopyToClipboard('tag17972');return false;" class="tag-decoration">release-68b6747</div><div id="tag11000" onclick="CopyToClipboard('tag11000');return false;" class="tag-decoration">release-8.9.0</div><div id="tag2018" onclick="CopyToClipboard('tag2018');return false;" class="tag-decoration">release-v8</div><div id="tag11733" onclick="CopyToClipboard('tag11733');return false;" class="tag-decoration">release-v8.9</div><div id="tag14275" onclick="CopyToClipboard('tag14275');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/68b67472b7e38b45c17d64d56d1268789243880f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29364587560" target="_blank">2026-07-14 20:09:03</a></td></tr>
<tr><td><div id="tag16642" onclick="CopyToClipboard('tag16642');return false;" class="tag-decoration">testing</div><div id="tag11983" onclick="CopyToClipboard('tag11983');return false;" class="tag-decoration">testing-7086cc2</div><div id="tag30959" onclick="CopyToClipboard('tag30959');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag11095" onclick="CopyToClipboard('tag11095');return false;" class="tag-decoration">testing-v8</div><div id="tag10032" onclick="CopyToClipboard('tag10032');return false;" class="tag-decoration">testing-v8.9</div><div id="tag29559" onclick="CopyToClipboard('tag29559');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/7086cc261de13f040ebf5d1959ca452ba7a66fbf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29364586692" target="_blank">2026-07-14 20:09:03</a></td></tr>
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
