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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag882" onclick="CopyToClipboard('tag882');return false;" class="tag-decoration">release</div><div id="tag31412" onclick="CopyToClipboard('tag31412');return false;" class="tag-decoration">release-3b28b04</div><div id="tag4898" onclick="CopyToClipboard('tag4898');return false;" class="tag-decoration">release-0.24.831</div><div id="tag5978" onclick="CopyToClipboard('tag5978');return false;" class="tag-decoration">release-v0</div><div id="tag26303" onclick="CopyToClipboard('tag26303');return false;" class="tag-decoration">release-v0.24</div><div id="tag14749" onclick="CopyToClipboard('tag14749');return false;" class="tag-decoration">release-v0.24.831</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/3b28b049110be907599d8e445fae2fcaaf08500e" target="_blank">Version update: 0.24.824 => 0.24.831</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20934718197" target="_blank">2026-01-12 20:56:41</a></td></tr>
<tr><td><div id="tag21301" onclick="CopyToClipboard('tag21301');return false;" class="tag-decoration">testing</div><div id="tag19081" onclick="CopyToClipboard('tag19081');return false;" class="tag-decoration">testing-475c9f1</div><div id="tag27454" onclick="CopyToClipboard('tag27454');return false;" class="tag-decoration">testing-0.24.831</div><div id="tag28290" onclick="CopyToClipboard('tag28290');return false;" class="tag-decoration">testing-v0</div><div id="tag13340" onclick="CopyToClipboard('tag13340');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11079" onclick="CopyToClipboard('tag11079');return false;" class="tag-decoration">testing-v0.24.831</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/475c9f10e586f9c955f4de314bfe6997a724040c" target="_blank">Version update: 0.24.824 => 0.24.831</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20934718757" target="_blank">2026-01-12 20:56:43</a></td></tr>
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
