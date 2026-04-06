---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13288" onclick="CopyToClipboard('tag13288');return false;" class="tag-decoration">release</div><div id="tag30294" onclick="CopyToClipboard('tag30294');return false;" class="tag-decoration">release-b21d062</div><div id="tag9282" onclick="CopyToClipboard('tag9282');return false;" class="tag-decoration">release-0.24.1539</div><div id="tag3557" onclick="CopyToClipboard('tag3557');return false;" class="tag-decoration">release-v0</div><div id="tag16368" onclick="CopyToClipboard('tag16368');return false;" class="tag-decoration">release-v0.24</div><div id="tag31463" onclick="CopyToClipboard('tag31463');return false;" class="tag-decoration">release-v0.24.1539</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b21d062173b2ee217717b50bbad07925f56014f8" target="_blank">Version update: 0.24.1537 => 0.24.1539</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23997070932" target="_blank">2026-04-05 07:42:57</a></td></tr>
<tr><td><div id="tag4155" onclick="CopyToClipboard('tag4155');return false;" class="tag-decoration">testing</div><div id="tag1362" onclick="CopyToClipboard('tag1362');return false;" class="tag-decoration">testing-6c10a03</div><div id="tag23299" onclick="CopyToClipboard('tag23299');return false;" class="tag-decoration">testing-0.24.1542</div><div id="tag25178" onclick="CopyToClipboard('tag25178');return false;" class="tag-decoration">testing-v0</div><div id="tag21553" onclick="CopyToClipboard('tag21553');return false;" class="tag-decoration">testing-v0.24</div><div id="tag3119" onclick="CopyToClipboard('tag3119');return false;" class="tag-decoration">testing-v0.24.1542</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6c10a0372869c481dc0221190381812e9bacb4d8" target="_blank">Version update: 0.24.1539 => 0.24.1542</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24023812463" target="_blank">2026-04-06 07:51:51</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
