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
<tr><td><div id="tag25371" onclick="CopyToClipboard('tag25371');return false;" class="tag-decoration">nightly</div><div id="tag26718" onclick="CopyToClipboard('tag26718');return false;" class="tag-decoration">nightly-088fdad</div><div id="tag13527" onclick="CopyToClipboard('tag13527');return false;" class="tag-decoration">nightly-7c8703824f7c3a51646256595177d04752713273</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/088fdad0a1b215371556c08af58c33b83959e157" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35016980047" target="_blank">2026-09-15 20:00:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20591" onclick="CopyToClipboard('tag20591');return false;" class="tag-decoration">release</div><div id="tag3921" onclick="CopyToClipboard('tag3921');return false;" class="tag-decoration">release-25ade84</div><div id="tag18647" onclick="CopyToClipboard('tag18647');return false;" class="tag-decoration">release-5.1.3</div><div id="tag6566" onclick="CopyToClipboard('tag6566');return false;" class="tag-decoration">release-v5</div><div id="tag4779" onclick="CopyToClipboard('tag4779');return false;" class="tag-decoration">release-v5.1</div><div id="tag3816" onclick="CopyToClipboard('tag3816');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/25ade84786f5f903e676aae3d306bde4e881de6f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34961568391" target="_blank">2026-09-15 11:07:17</a></td></tr>
<tr><td><div id="tag31982" onclick="CopyToClipboard('tag31982');return false;" class="tag-decoration">testing</div><div id="tag20757" onclick="CopyToClipboard('tag20757');return false;" class="tag-decoration">testing-ba35125</div><div id="tag16607" onclick="CopyToClipboard('tag16607');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag25668" onclick="CopyToClipboard('tag25668');return false;" class="tag-decoration">testing-v5</div><div id="tag2532" onclick="CopyToClipboard('tag2532');return false;" class="tag-decoration">testing-v5.1</div><div id="tag19940" onclick="CopyToClipboard('tag19940');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/ba35125c4d5e1bee6364c75698a1d76d386404ee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/34961572421" target="_blank">2026-09-15 11:07:20</a></td></tr>
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
