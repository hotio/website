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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11051" onclick="CopyToClipboard('tag11051');return false;" class="tag-decoration">release</div><div id="tag26258" onclick="CopyToClipboard('tag26258');return false;" class="tag-decoration">release-8031b8f</div><div id="tag17601" onclick="CopyToClipboard('tag17601');return false;" class="tag-decoration">release-9.0.3</div><div id="tag18462" onclick="CopyToClipboard('tag18462');return false;" class="tag-decoration">release-v9</div><div id="tag24456" onclick="CopyToClipboard('tag24456');return false;" class="tag-decoration">release-v9.0</div><div id="tag27266" onclick="CopyToClipboard('tag27266');return false;" class="tag-decoration">release-v9.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/8031b8fc641d73f214cd88eecb09ab1dd74625e9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35698933631" target="_blank">2026-09-22 07:18:14</a></td></tr>
<tr><td><div id="tag25950" onclick="CopyToClipboard('tag25950');return false;" class="tag-decoration">testing</div><div id="tag15105" onclick="CopyToClipboard('tag15105');return false;" class="tag-decoration">testing-4ba51d2</div><div id="tag19291" onclick="CopyToClipboard('tag19291');return false;" class="tag-decoration">testing-9.0.4</div><div id="tag30384" onclick="CopyToClipboard('tag30384');return false;" class="tag-decoration">testing-v9</div><div id="tag5001" onclick="CopyToClipboard('tag5001');return false;" class="tag-decoration">testing-v9.0</div><div id="tag378" onclick="CopyToClipboard('tag378');return false;" class="tag-decoration">testing-v9.0.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4ba51d2a7410a403c9c76dce1c07bbdf903ea56b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/35763872700" target="_blank">2026-09-22 17:56:06</a></td></tr>
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
