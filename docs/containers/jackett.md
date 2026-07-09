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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28496" onclick="CopyToClipboard('tag28496');return false;" class="tag-decoration">release</div><div id="tag13195" onclick="CopyToClipboard('tag13195');return false;" class="tag-decoration">release-85f9bd1</div><div id="tag8060" onclick="CopyToClipboard('tag8060');return false;" class="tag-decoration">release-0.24.2196</div><div id="tag129" onclick="CopyToClipboard('tag129');return false;" class="tag-decoration">release-v0</div><div id="tag11338" onclick="CopyToClipboard('tag11338');return false;" class="tag-decoration">release-v0.24</div><div id="tag24976" onclick="CopyToClipboard('tag24976');return false;" class="tag-decoration">release-v0.24.2196</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/85f9bd1df8b4fc12e9acd75f6c26c8d595b40ffa" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29004902347" target="_blank">2026-07-09 08:29:21</a></td></tr>
<tr><td><div id="tag27456" onclick="CopyToClipboard('tag27456');return false;" class="tag-decoration">testing</div><div id="tag30803" onclick="CopyToClipboard('tag30803');return false;" class="tag-decoration">testing-7464f4e</div><div id="tag8651" onclick="CopyToClipboard('tag8651');return false;" class="tag-decoration">testing-0.24.2196</div><div id="tag26190" onclick="CopyToClipboard('tag26190');return false;" class="tag-decoration">testing-v0</div><div id="tag8667" onclick="CopyToClipboard('tag8667');return false;" class="tag-decoration">testing-v0.24</div><div id="tag31734" onclick="CopyToClipboard('tag31734');return false;" class="tag-decoration">testing-v0.24.2196</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7464f4e1f99dc9e228439229f6ef54748cf6b310" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29004899490" target="_blank">2026-07-09 08:29:18</a></td></tr>
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
