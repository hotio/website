---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag21809" onclick="CopyToClipboard('tag21809');return false;" class="tag-decoration">nightly</div><div id="tag4528" onclick="CopyToClipboard('tag4528');return false;" class="tag-decoration">nightly-c2992e6</div><div id="tag17143" onclick="CopyToClipboard('tag17143');return false;" class="tag-decoration">nightly-2.5.1.5469</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/c2992e6d0f529a35c8d64cd3b27a72887709642c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29306552790" target="_blank">2026-07-14 04:40:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24621" onclick="CopyToClipboard('tag24621');return false;" class="tag-decoration">release</div><div id="tag23999" onclick="CopyToClipboard('tag23999');return false;" class="tag-decoration">release-9b62be0</div><div id="tag16535" onclick="CopyToClipboard('tag16535');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/9b62be0886f9ca36b2a092ee459cdb9deacd4861" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29306552250" target="_blank">2026-07-14 04:40:29</a></td></tr>
<tr><td><div id="tag11640" onclick="CopyToClipboard('tag11640');return false;" class="tag-decoration">testing</div><div id="tag5497" onclick="CopyToClipboard('tag5497');return false;" class="tag-decoration">testing-9dfd140</div><div id="tag24640" onclick="CopyToClipboard('tag24640');return false;" class="tag-decoration">testing-2.5.1.5464</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/9dfd140b29f7d6d989df20c490e1670997f61fd2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29306554047" target="_blank">2026-07-14 04:40:31</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
