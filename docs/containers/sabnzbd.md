---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag29391" onclick="CopyToClipboard('tag29391');return false;" class="tag-decoration">nightly</div><div id="tag27570" onclick="CopyToClipboard('tag27570');return false;" class="tag-decoration">nightly-543e245</div><div id="tag17282" onclick="CopyToClipboard('tag17282');return false;" class="tag-decoration">nightly-4a999a19081b76cff813b1c0e13bfea2234f314a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/543e245cca2f3927236f4d92a4ead60488940e22" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33556160831" target="_blank">2026-09-01 20:34:56</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12354" onclick="CopyToClipboard('tag12354');return false;" class="tag-decoration">release</div><div id="tag26118" onclick="CopyToClipboard('tag26118');return false;" class="tag-decoration">release-1e8d0df</div><div id="tag31191" onclick="CopyToClipboard('tag31191');return false;" class="tag-decoration">release-5.1.2</div><div id="tag4145" onclick="CopyToClipboard('tag4145');return false;" class="tag-decoration">release-v5</div><div id="tag5260" onclick="CopyToClipboard('tag5260');return false;" class="tag-decoration">release-v5.1</div><div id="tag9564" onclick="CopyToClipboard('tag9564');return false;" class="tag-decoration">release-v5.1.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/1e8d0dfd274b77fceb7660a38429abc6192de8fc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33585220148" target="_blank">2026-09-02 02:58:16</a></td></tr>
<tr><td><div id="tag20811" onclick="CopyToClipboard('tag20811');return false;" class="tag-decoration">testing</div><div id="tag16888" onclick="CopyToClipboard('tag16888');return false;" class="tag-decoration">testing-879b8aa</div><div id="tag11273" onclick="CopyToClipboard('tag11273');return false;" class="tag-decoration">testing-5.1.2</div><div id="tag31040" onclick="CopyToClipboard('tag31040');return false;" class="tag-decoration">testing-v5</div><div id="tag23655" onclick="CopyToClipboard('tag23655');return false;" class="tag-decoration">testing-v5.1</div><div id="tag26415" onclick="CopyToClipboard('tag26415');return false;" class="tag-decoration">testing-v5.1.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/879b8aa249ff15a05b34c477b81f70d1c41b5e52" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/33511455115" target="_blank">2026-09-01 13:06:45</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
